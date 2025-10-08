
import { UAParser } from "ua-parser-js";
import { nanoid } from "nanoid";
import { PRISMA_CLIENT, REDIS_CLIENT, SQS_CLIENT } from "../index.js";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
import type { Request, Response } from "express";
import requestIp from "request-ip";
import { DEFAULT_SQS_MESSAGE_GROUP_ID, REDIS_ALIAS_CACHE_TIME } from "./constants.js";

export const getUniqueAlias = async (): Promise<string> => {

    for (let i = 0; i < 5; i++) { // its rare to collide, just not to make it infinte, have added 5
        const id = nanoid(8);
        const found = await PRISMA_CLIENT.urls.findUnique({
            where: {
                alias: id
            }
        });
        if (!found) return id;
    }
    throw new Error("Failed to generate unique alias after multiple attempts");
};

export const formatDate = (date: Date) => {
    return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
}

export const pushToSQS = async (data: any): Promise<void> => {
    try {
        console.log("Pushing to SQS", data);
        const SQS_URL = process.env.SQS_URL;

        if (!SQS_CLIENT || !SQS_URL) return;

        const params = {
            QueueUrl: SQS_URL,
            MessageBody: JSON.stringify(data),
            MessageGroupId: DEFAULT_SQS_MESSAGE_GROUP_ID,
            MessageDeduplicationId: nanoid()
        }

        await SQS_CLIENT.send(new SendMessageCommand(params));
        return;
    } catch (e) {
        console.log("ERROR pushing to SQS: ", e);
    }
}

export const logUrlVisit = (req: Request, alias: string) => {
    try {
        let ua = new UAParser(req.headers['user-agent']);
        const device = ua.getDevice().model || "Unknown";
        const os = ua.getOS().name || "Unknown";
        const browser = ua.getBrowser().name || "Unknown";
        const clientIp = requestIp.getClientIp(req);

        pushToSQS({
            ip: clientIp,
            timeStamp: new Date().toISOString(),
            alias,
            device,
            os,
            browser
        })
    } catch (e) {
        console.log("ERROR logging the request!", e);
    }
}

export const redirectUser =  async (req: Request, res: Response) => {
    try {
        const alias = req.params.alias?.trim();

        if (!alias) {
            return res.status(400).json({ message: "Invalid alias provided." });
        }

        const cachedURL = await REDIS_CLIENT.get(alias);
        if (cachedURL) {
            logUrlVisit(req, alias); // async to avoid delay
            return res.redirect(cachedURL);
        }

        const url = await PRISMA_CLIENT.urls.findUnique({
            where: { alias },
            select: { target_url: true }
        });

        if (!url) {
            return res.status(404).json({ message: "Short link not found." });
        }
        
        logUrlVisit(req, alias); // async to avoid delay
        
        await REDIS_CLIENT.set(alias, url.target_url, "EX", REDIS_ALIAS_CACHE_TIME); // cached for 1 hour

        return res.redirect(url.target_url);
    } catch (e) {
        console.error("Error visiting alias:", e);
        res.status(500).json({
            message: "An unexpected error occurred while redirecting. Please try again later."
        });
    }
}