import requestIp from "request-ip";
import rateLimit from "express-rate-limit";
import type { Request } from "express";
import { REDIS_CLIENT } from "../index.js";
import RedisStore, { RedisReply } from "rate-limit-redis";

export const generateLimitter = (limit: number, seconds: number) => {

    const rateLimiiter = rateLimit({
        windowMs: seconds,
        max: limit,
        standardHeaders: true,
        legacyHeaders: false,
        store: new RedisStore({
            sendCommand: (...args: string[]): Promise<RedisReply> =>
                REDIS_CLIENT.call(args as any) as Promise<RedisReply>,
        }),
        keyGenerator: (req: Request) => {
            const clientIp = requestIp.getClientIp(req);
            return req.user_id || clientIp || req.ip || "UNKNOWN";
        },
        handler: (_, res) => {
            res.status(429).json({
                message: "Too many requests. Please wait a moment before retrying."
            });
        },
    });

    return rateLimiiter;
}