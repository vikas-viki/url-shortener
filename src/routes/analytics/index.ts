import express, { Router } from "express";
import type { Request, Response } from "express";
import { PRISMA_CLIENT } from "../../index.js";

const router: express.Router = Router();

router.get("/alias/:alias", async (req: Request, res: Response) => {
    try {
        const alias = req.params.alias?.trim();

        if (!alias) {
            return res.status(400).json({ message: "Alias not provided!" });
        }

        const url = await PRISMA_CLIENT.urls.findUnique({
            where: { alias, user_id: req.user_id! }
        });

        if (!url) {
            return res.status(404).json({ message: "URL not found!" });
        }

        const clicks = await PRISMA_CLIENT.clicks.findMany({
            where: { url_id: url.id }
        });

        const total_clicks = clicks.length;
        const unique_users = [...new Set(clicks.map(c => c.ip))];
        const unique_countries = [...new Set(clicks.map(c => c.country))];
        const rawData = clicks.map(c => ({
            ip: c.ip,
            timestamp: c.timestamp,
            country: c.country,
            device: c.device,
            os: c.os
        }));

        res.status(200).json({
            url_data: {
                total_clicks,
                unique_users,
                unique_countries,
                rawData
            }
        });
    } catch (err) {
        console.error("Error fetching alias analytics:", err);
        res.status(500).json({ message: "Error fetching alias analytics. Please try again later." });
    }
});


router.get("/topic/:topic", async (req: Request, res: Response) => {
    try {
        const topic = req.params.topic?.trim();

        if (!topic) {
            return res.status(400).json({ message: "Topic not provided!" });
        }

        const urls = await PRISMA_CLIENT.urls.findMany({
            where: { topic, user_id: req.user_id! }
        });

        if (!urls || urls.length === 0) {
            return res.status(404).json({ message: "No URLs found for this topic!" });
        }

        const clicks = await PRISMA_CLIENT.clicks.findMany({
            where: { url_id: { in: urls.map(u => u.id) } }
        });

        const urlGroups: Record<string, any> = {};

        urls.forEach(url => {
            const urlClicks = clicks.filter(c => c.url_id === url.id);
            urlGroups[url.alias] = {
                total_clicks: urlClicks.length,
                unique_users: [...new Set(urlClicks.map(c => c.ip))],
                unique_countries: [...new Set(urlClicks.map(c => c.country))],
                rawData: urlClicks.map(c => ({
                    ip: c.ip,
                    timestamp: c.timestamp,
                    country: c.country,
                    device: c.device,
                    os: c.os
                }))
            };
        });

        const total_clicks = clicks.length;
        const unique_users = [...new Set(clicks.map(c => c.ip))];
        const unique_countries = [...new Set(clicks.map(c => c.country))];

        res.status(200).json({
            topic_data: {
                total_clicks,
                unique_users,
                unique_countries,
                urls: urlGroups
            }
        });
    } catch (err) {
        console.error("Error fetching topic analytics:", err);
        res.status(500).json({ message: "Error fetching topic analytics. Please try again later." });
    }
});

export default router;
