import express from "express";
import helmet from "helmet";
import type { Request, Response } from "express";
import { initializeGoogleAuth, initializePrismaClient, initializeRedis, initializeSQS, isAllEnvsLoaded } from "./utils/initialiser.js";
import { startPolling } from "./utils/pollSQS.js";
import authRouter from "./routes/auth/index.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(helmet());

isAllEnvsLoaded();

export const PRISMA_CLIENT = initializePrismaClient();
export const REDIS_CLIENT = initializeRedis();
export const SQS_CLIENT = initializeSQS();
export const GOOGLE_CLIENT = initializeGoogleAuth();

app.use("/auth", authRouter);
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is healthy" });
});

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);

    // startPolling();
});
