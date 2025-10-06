import express, { Router } from "express";
import type { Request, Response } from "express";
import z from "zod";
import { CreateURLScheema } from "../../utils/zod";
import { PRISMA_CLIENT } from "../..";
import { getUniqueAlias } from "../../utils/helpers";
import { SHORT_URL_HOST } from "../../utils/constants";

const router: express.Router = Router();

router.post("/create", async (req: Request, res: Response) => {
    try {
        const body = CreateURLScheema.safeParse(req.body);
        if (!body.success) {
            return res.status(400).json({
                message: "Invalid input provided for creating short URL"
            })
        }

        const data = body.data;
        if (!!data.custom_alias) {
            const urls = await PRISMA_CLIENT.urls.findFirst({
                where: {
                    alias: data.custom_alias
                }
            });

            if (urls) {
                return res.status(400).json({ message: "Alias already taken, please provide another" });
            }
        } else {
            data.custom_alias = await getUniqueAlias();
        }

        const url = await PRISMA_CLIENT.urls.create({
            data: {
                user_id: req.user_id!,
                alias: data.custom_alias,
                topic: data.topic,
                target_url: data.target_url
            }
        });

        return res.status(200).json({
            id: url.id,
            target_url: url.target_url,
            topic: url.topic,
            created_at: url.created_at,
            message: `Your URL have been created.`,
            short_url: `${SHORT_URL_HOST}/${data.custom_alias}`
        });
    } catch (e) {
        res.status(500).json({ message: "Error creating short url, please try again!" });
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const urls = await PRISMA_CLIENT.urls.findMany({
            where: {
                user_id: req.user_id!
            }
        });

        res.status(200).json({
            urls: urls.map(u => ({
                id: u.id,
                alias: u.alias,
                target_url: u.target_url,
                topic: u.topic,
                created_at: u.created_at
            }))
        })
    } catch (e) {
        res.status(500).json({ message: "Error getting shorturls, please try again!" })
    }
});

router.get("/topics", async (req: Request, res: Response) => {
    try {
        const urls = await PRISMA_CLIENT.urls.findMany({
            where: {
                user_id: req.user_id!
            }
        });

        res.status(200).json({
            topics: [...new Set(urls.map(u => u.topic.toString()))]
        });
    } catch (e) {
        res.status(500).json({ message: "Error getting shorturls, please try again!" })
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const urlId = req.params.id;

        if (!urlId) {
            return res.status(400).json({ message: "Invalid url" });
        }

        const url = await PRISMA_CLIENT.urls.findFirst({
            where: {
                user_id: req.user_id!,
                OR: [
                    { id: urlId },
                    { alias: urlId }
                ]
            }
        });

        if (!url) {
            return res.status(404).json({ message: "URL not found!" });
        }

        return res.status(200).json({
            id: url.id,
            alias: url.alias,
            target_url: url.target_url,
            topic: url.topic,
            created_at: url.created_at,
        })

    } catch (e) {
        res.status(500).json({ message: "Error getting short url data, please try again!" });
    }
});


export default router;