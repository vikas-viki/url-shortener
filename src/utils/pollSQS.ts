import { DeleteMessageCommand, ReceiveMessageCommand, ReceiveMessageResult } from "@aws-sdk/client-sqs";
import { PRISMA_CLIENT, REDIS_CLIENT, SQS_CLIENT } from "../index.js";
import { DEFAULT_IP_COUNTRY, REDIS_URLID_CACHE_TIME } from "./constants.js";
import { SQS_MESSAGE } from "../types/index.js";
import geoIp from "geoip-lite";

export const startPolling = async () => {
    while (true) {
        try {
            await pollForMessages();
        } catch (err) {
            console.error("Polling error:", err);
            await new Promise((res) => setTimeout(res, 5000));
        }
    }
}

export const pollForMessages = async () => {
    const SQS_URL = process.env.SQS_URL;
    if (!SQS_CLIENT || !SQS_URL) return;

    // get all 100 messages (if there)
    const resp = await SQS_CLIENT.send(
        new ReceiveMessageCommand({
            MaxNumberOfMessages: 100,
            QueueUrl: SQS_URL,
            WaitTimeSeconds: 20,
        })
    ) as ReceiveMessageResult;

    if (!resp.Messages || resp.Messages.length === 0) return;

    const messages: SQS_MESSAGE[] = [];
    const aliasesSet = new Set<string>();

    // get each messages and uniqe aliases
    resp.Messages.forEach((m) => {
        if (m.Body && m.MessageId) {
            try {
                const body: SQS_MESSAGE = JSON.parse(m.Body);
                messages.push({ ...body, messageId: m.MessageId, receiptHandle: m.ReceiptHandle! });
                aliasesSet.add(body.alias);
            } catch (err) {
                console.error("Failed to parse SQS message:", err);
            }
        }
    });

    const aliases = Array.from(aliasesSet);

    // get all the aliases mapped to their urlIds
    const aliasToUrlId: Record<string, string> = {};
    const aliasesToFetchFromDB: string[] = [];

    for (const alias of aliases) {
        const cached = await REDIS_CLIENT.get(alias);
        if (cached) {
            aliasToUrlId[alias] = cached;
        } else {
            aliasesToFetchFromDB.push(alias);
        }
    }

    if (aliasesToFetchFromDB.length > 0) {
        const urls = await PRISMA_CLIENT.urls.findMany({
            where: { alias: { in: aliasesToFetchFromDB } },
            select: { id: true, alias: true }
        });

        urls.forEach(u => {
            aliasToUrlId[u.alias] = u.id;
            REDIS_CLIENT.set(u.alias, u.id, "EX", REDIS_URLID_CACHE_TIME);
        });
    }

    // have each url id with set of messages of it.
    const messagesByUrlId: Record<string, SQS_MESSAGE[]> = {};

    await Promise.all(messages.map(async msg => {
        const urlId = aliasToUrlId[msg.alias];
        if (!urlId) return;

        if (!messagesByUrlId[urlId]) {
            messagesByUrlId[urlId] = [];
        }
        messagesByUrlId[urlId].push({
            ...msg,
            country: geoIp.lookup(msg.ip)?.country || DEFAULT_IP_COUNTRY
        });
    }))


    await Promise.all(
        Object.entries(messagesByUrlId).map(async ([urlId, messages]) => {
            await PRISMA_CLIENT.clicks.createMany({
                data: messages.map(m => ({
                    url_id: urlId,          
                    ip: m.ip,
                    country: m.country,
                    device: m.device,
                    os: m.os,
                    timestamp: new Date(m.timeStamp),
                })),
            });
        })
    );

    await Promise.all(
        resp.Messages.map(async (m) => {
            try {
                if (!m.MessageId || !m.ReceiptHandle) return;

                await SQS_CLIENT.send(
                    new DeleteMessageCommand({
                        QueueUrl: SQS_URL!,
                        ReceiptHandle: m.ReceiptHandle,
                    })
                );
            } catch (err) {
                console.error("Error deleting SQS message:", err);
            }
        })
    );

    console.log("Processed batch messages by URL ID:", messagesByUrlId);
}
