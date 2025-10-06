import { RateLimiterRedis } from 'rate-limiter-flexible';
import { initializeRedis } from '../utils/initialiser.js';
import type { Request, Response, NextFunction } from 'express';

const rateLimiter = new RateLimiterRedis({
    storeClient: initializeRedis(),
    keyPrefix: 'rl',
    points: 60,
    duration: 5 * 60 * 60 // 60 creations per 5 hours
});

export const rateLimitMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const key = req.user_id || req.ip || "UNKNOWN";
        await rateLimiter.consume(key);
        next();
    } catch {
        res.status(429).json({ message: 'Too many requests. Please try again later.' });
    }
};
