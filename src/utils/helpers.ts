
import * as uap from 'ua-parser-js';
import { nanoid } from "nanoid";
import { PRISMA_CLIENT, SQS_CLIENT } from "../index.js";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
import type { Request, Response } from "express";
import requestIp from "request-ip";
    

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


export const pushToSQS = async (data: any): Promise<void> => {
    try {
        const SQS_URL = process.env.SQS_URL;

        if (!SQS_CLIENT || !SQS_URL) return;

        const params = {
            QueueUrl: SQS_URL,
            MessageBody: JSON.stringify(data)
        }

        await SQS_CLIENT.send(new SendMessageCommand(params));
        return;
    } catch (e) {
        console.log("ERROR pushing to SQS: ", e);
    }
}

export const logUrlVisit = (req: Request, alias: string) => {
    try {
        // @ts-ignore
        let ua = uap(req.headers['user-agent']);
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
        console.log("ERROR logging the request!");
    }
}

export const getOverAllAnalytics = async (req: Request, res: Response) => {
    try {
        const totalUrls = await PRISMA_CLIENT.urls.count();
        const totalClicks = await PRISMA_CLIENT.clicks.count();
        const uniqueUserIPsRaw = await PRISMA_CLIENT.clicks.findMany({
            distinct: ["ip"],
            select: { ip: true }
        });
        const totalUniqueUsers = uniqueUserIPsRaw.length;

        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 30);

        const clicksOverTimeRaw = await PRISMA_CLIENT.clicks.groupBy({
            by: ["timestamp"],
            _count: { id: true },
            where: {
                timestamp: { gte: startDate }
            }
        });
        const clicksOverTime: Record<string, number> = {};
        
        clicksOverTimeRaw.forEach(c => {
            const day = c.timestamp.toISOString().split("T")[0]; 
            if(!day) return;
            clicksOverTime[day] = (clicksOverTime[day] || 0) + c._count.id;
        });

        res.status(200).json({
            total_urls: totalUrls,
            total_clicks: totalClicks,
            total_unique_users: totalUniqueUsers,
            usage_trends_last_30_days: clicksOverTime
        });
    } catch (err) {
        console.error("Error fetching overall analytics:", err);
        res.status(500).json({
            message: "Error fetching overall analytics. Please try again later."
        });
    }
}