import express from "express";
import helmet from "helmet";
import type { Request, Response } from "express";
import { initializeGoogleAuth, initializePrismaClient, initializeRedis, initializeSQS, isAllEnvsLoaded } from "./utils/initialiser";
import { startPolling } from "./utils/pollSQS";
import authRouter from "./routes/auth";

const app = express();

app.use(helmet());

isAllEnvsLoaded();


export const PRISMA_CLIENT = initializePrismaClient();
export const REDIS_CLIENT = initializeRedis();
export const SQS_CLIENT = initializeSQS();
export const GOOGLE_CLIENT = initializeGoogleAuth();

startPolling();

app.use("/auth", authRouter);
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is healthy" });
});


module.exports = {
    app
}