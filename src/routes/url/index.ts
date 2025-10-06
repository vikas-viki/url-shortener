import express, { Router } from "express";
import type { Request, Response } from "express";
import { CreateURLScheema } from "../../utils/zod.js";
import { PRISMA_CLIENT } from "../../index.js";
import { getUniqueAlias } from "../../utils/helpers.js";
import { SHORT_URL_HOST } from "../../utils/constants.js";
import { generateLimitter } from "../../middlewares/rate-limit.js";

const router: express.Router = Router();

router.post("/create", generateLimitter(60, 24 * 60 * 60), async (req: Request, res: Response) => {
    try {
        const body = CreateURLScheema.safeParse(req.body);
        if (!body.success) {
            return res.status(400).json({
                message: "Invalid request body. Please check the input fields and try again."
            });
        }

        const data = body.data;

        if (data.custom_alias) {
            const existing = await PRISMA_CLIENT.urls.findFirst({
                where: { alias: data.custom_alias }
            });

            if (existing) {
                return res.status(400).json({
                    message: "The requested alias is already in use. Please choose another."
                });
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
            short_url: `${SHORT_URL_HOST}/${data.custom_alias}`,
            message: "Short URL created successfully."
        });
    } catch (e) {
        res.status(500).json({
            message: "An unexpected error occurred while creating the short URL. Please try again later."
        });
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const urls = await PRISMA_CLIENT.urls.findMany({
            where: { user_id: req.user_id! }
        });

        return res.status(200).json({
            urls: urls.map(u => ({
                id: u.id,
                alias: u.alias,
                target_url: u.target_url,
                topic: u.topic,
                created_at: u.created_at
            }))
        });
    } catch (e) {
        res.status(500).json({
            message: "Unable to fetch URLs at the moment. Please try again later."
        });
    }
});

router.get("/topics", async (req: Request, res: Response) => {
    try {
        const urls = await PRISMA_CLIENT.urls.findMany({
            where: { user_id: req.user_id! }
        });

        return res.status(200).json({
            topics: [...new Set(urls.map(u => u.topic.toString()))]
        });
    } catch (e) {
        res.status(500).json({
            message: "Failed to retrieve topics. Please try again later."
        });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const urlId = req.params.id;

        if (!urlId) {
            return res.status(400).json({
                message: "Invalid URL identifier provided."
            });
        }

        const url = await PRISMA_CLIENT.urls.findFirst({
            where: {
                user_id: req.user_id!,
                OR: [{ id: urlId }, { alias: urlId }]
            }
        });

        if (!url) {
            return res.status(404).json({
                message: "No URL found matching the given identifier."
            });
        }

        return res.status(200).json({
            id: url.id,
            alias: url.alias,
            target_url: url.target_url,
            topic: url.topic,
            created_at: url.created_at
        });
    } catch (e) {
        res.status(500).json({
            message: "An unexpected error occurred while retrieving the URL. Please try again later."
        });
    }
});

export default router;