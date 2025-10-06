import { SQSClient } from "@aws-sdk/client-sqs";
import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis"
import Redis from "ioredis";
import { PrismaClient } from "../prisma/client/index.js";

dotenv.config();

export const initializeGoogleAuth = () => {
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
    const GOOGLE_REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL!;

    const oAuthClient: OAuth2Client = new google.auth.OAuth2(
        GOOGLE_CLIENT_ID.toString(),
        GOOGLE_CLIENT_SECRET.toString(),
        GOOGLE_REDIRECT_URL.toString()
    );

    return oAuthClient;
}

export const initializeRedis = () => {
    const REDIS_URL = process.env.REDIS_URL!;

    const redisClient = new Redis(REDIS_URL.toString());

    return redisClient;
}

export const initializeSQS = () => {
    const SQS_ACCESS_KEY = process.env.SQS_ACCESS_KEY!;
    const SQS_SECRET_ACCESS_KEY = process.env.SQS_SECRET_ACCESS_KEY!;

    const sqs = new SQSClient({
        region: "ap-south-1",
        credentials: {
            accessKeyId: SQS_ACCESS_KEY,
            secretAccessKey: SQS_SECRET_ACCESS_KEY
        }
    });

    return sqs;
}

export const isAllEnvsLoaded =()=>{
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    const GOOGLE_REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL;

    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URL) {
        throw new Error("Google client credentials not found!");
    }

    const REDIS_URL = process.env.REDIS_URL;

    if (!REDIS_URL) {
        throw new Error("Redis credentials not found!");
    }

    const SQS_ACCESS_KEY = process.env.SQS_ACCESS_KEY;
    const SQS_SECRET_ACCESS_KEY = process.env.SQS_SECRET_ACCESS_KEY;

    if (!SQS_ACCESS_KEY || !SQS_SECRET_ACCESS_KEY) {
        throw new Error("SQS credentials not found!");

    }

    const JWT_SECRET= process.env.JWT_SECRET;

    if(!JWT_SECRET){
        throw new Error("JWT secret not found!");
    }
}

export const initializePrismaClient  = () =>{
    const client = new PrismaClient();

    return client;
}