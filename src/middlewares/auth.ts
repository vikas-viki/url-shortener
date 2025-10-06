import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserJWTPayload } from "../types/index.js";
import { PRISMA_CLIENT } from "../index.js";

export const authorizeUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !/^Bearer\s+\S+$/.test(authHeader)) {
            return res.status(401).json({ message: "Authorization header is missing or malformed." });
        }

        const token = authHeader.split(" ")[1];
        const JWT_SECRET = process.env.JWT_SECRET!;
        const data = jwt.verify(token!, JWT_SECRET) as unknown as UserJWTPayload;

        if (!data.user_id) {
            return res.status(401).json({ message: "Invalid token payload." });
        }

        const user = await PRISMA_CLIENT.users.findFirst({
            where: { id: data.user_id }
        });

        if (!user) {
            return res.status(401).json({ message: "User not found. Please authenticate again." });
        }

        if (!user.token_expiry || new Date(user.token_expiry).getTime() <= Date.now()) {
            return res.status(401).json({ message: "Google access token has expired. Please re-authorize." });
        }

        req.user_id = data.user_id;

        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: "Invalid or expired JWT. Please log in again." });
    }
};
