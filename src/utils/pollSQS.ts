import geoIp from "geoip-lite";
import { SQS_MESSAGE } from "../types/index.js";
import { DEFAULT_IP_COUNTRY, REDIS_URLID_CACHE_TIME, SQS_GET_BATCH_SIZE, SQS_GET_BATCH_WAIT_TIME } from "./constants.js";
import { DeleteMessageCommand, ReceiveMessageCommand, ReceiveMessageResult } from "@aws-sdk/client-sqs";
import { initializePrismaClient, initializeRedis, initializeSQS, initializeGoogleAuth, areAllEnvsLoaded } from "./initialiser.js";

areAllEnvsLoaded();
export const PRISMA_CLIENT = initializePrismaClient();
export const REDIS_CLIENT = initializeRedis();
export const SQS_CLIENT = initializeSQS();
export const GOOGLE_CLIENT = initializeGoogleAuth();

export const startPolling = async () => {
    while (true) {
        try {
            await pollForMessages();
        } catch (err) {
            console.error("Polling error:", err);
            await new Promise((res) => setTimeout(res, 5000));
        }
        await new Promise((res) => setTimeout(res, 1000));
    }
}

export const fetchMessages = async (waitTime = 20) => {
    try {
        const SQS_URL = process.env.SQS_URL;
        const resp = await SQS_CLIENT.send(
            new ReceiveMessageCommand({
                QueueUrl: SQS_URL!.toString(),
                MaxNumberOfMessages: 10,
                WaitTimeSeconds: waitTime,
            })
        );

        return resp.Messages || [];
    } catch (err) {
        console.error("Error fetching messages from SQS:", err);
        return [];
    }
};

// either you get 50 messages or wait for 5s before moving on
export const collectBatch = async (batchSize = 50, maxWaitMs = 5000) => {
    const startTime = Date.now();
    let buffer = [];

    do {
        const messages = await fetchMessages(5);
        if (messages.length > 0) {
            buffer.push(...messages);
        }
    
        // if no messages, short delay before next fetch to avoid tight loop
        if (messages.length === 0) {
            await new Promise(res => setTimeout(res, 200));
        }
    }
    while (buffer.length < batchSize && Date.now() < startTime + maxWaitMs);

    return { messages: buffer };
};

export const pollForMessages = async () => {
    const SQS_URL = process.env.SQS_URL;

    const resp = await collectBatch(SQS_GET_BATCH_SIZE, SQS_GET_BATCH_WAIT_TIME);
    if (!resp.messages || resp.messages.length === 0) return;

    const messages: SQS_MESSAGE[] = [];
    const aliasesSet = new Set<string>();

    // get each messages and uniqe aliases
    resp.messages.forEach((m) => {
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
        const cached = await REDIS_CLIENT.get(`${alias}_URLID`);
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
            REDIS_CLIENT.set(`${u.alias}_URLID`, u.id, "EX", REDIS_URLID_CACHE_TIME);
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
        const country = msg.ip ? geoIp.lookup(msg.ip)?.country : DEFAULT_IP_COUNTRY;
        messagesByUrlId[urlId].push({
            ...msg,
            country: country || DEFAULT_IP_COUNTRY
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
        resp.messages.map(async (m) => {
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


(async () => {
    const poll= process.env.POLL || false;
    if (!poll) return;
    console.log("Started polling SQS!");
    startPolling();
})();