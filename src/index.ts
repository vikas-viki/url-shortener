import express, { Router } from "express";
import helmet from "helmet";
import type { Request, Response } from "express";
import { initializeGoogleAuth, initializePrismaClient, initializeRedis, initializeSQS, areAllEnvsLoaded } from "./utils/initialiser.js";
import authRouter from "./routes/auth/index.js";
import analyticsRouter from "./routes/analytics/index.js";
import dotenv from 'dotenv';
import { authorizeUser } from "./middlewares/auth.js";
import urlRouter from "./routes/url/index.js";
import requestIp from "request-ip";
import { logUrlVisit } from "./utils/helpers.js";
import { REDIS_ALIAS_CACHE_TIME } from "./utils/constants.js";

dotenv.config();
const app = express();
const apiRouter = Router();

app.use(express.json());
app.use(helmet());
areAllEnvsLoaded();

export const PRISMA_CLIENT = initializePrismaClient();
export const REDIS_CLIENT = initializeRedis();
export const SQS_CLIENT = initializeSQS();
export const GOOGLE_CLIENT = initializeGoogleAuth();

app.use(requestIp.mw());

app.use("/api", apiRouter);

apiRouter.use("/auth", authRouter);
apiRouter.use("/urls", authorizeUser, urlRouter);
apiRouter.use("/analytics", authorizeUser, analyticsRouter);
apiRouter.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is healthy" });
});
app.get("/:alias", async (req: Request, res: Response) => {
    try {
        const alias = req.params.alias?.trim();

        if (!alias) {
            return res.status(400).json({ message: "Invalid alias provided." });
        }

        logUrlVisit(req, alias);

        const cachedURL = await REDIS_CLIENT.get(alias);
        if (cachedURL) {
            return res.redirect(cachedURL);
        }

        const url = await PRISMA_CLIENT.urls.findUnique({
            where: { alias },
            select: { target_url: true }
        });

        if (!url) {
            return res.status(404).json({ message: "Short link not found." });
        }

        await REDIS_CLIENT.set(alias, url.target_url, "EX", REDIS_ALIAS_CACHE_TIME); // cached for 1 hour

        return res.redirect(url.target_url);
    } catch (e) {
        console.error("Error visiting alias:", e);
        res.status(500).json({
            message: "An unexpected error occurred while redirecting. Please try again later."
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(+PORT, '0.0.0.0',() => {
    console.log(`Server started on port ${PORT}`);
});


