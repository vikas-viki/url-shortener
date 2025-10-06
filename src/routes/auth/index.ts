import axios from "axios";
import express from "express";
import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import { GoogleSigninResponse } from "../../types/index.js";
import { GOOGLE_CLIENT, PRISMA_CLIENT } from "../../index.js";

const router: express.Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    const link = GOOGLE_CLIENT.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        redirect_uri: "http://localhost:3000/auth/callback",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
    });

    res.status(200).json({
        url: link,
        message: "Visit the above URL to authenticate with Google."
    });
});

router.get("/callback", async (req: Request, res: Response) => {
    const code = req.query.code?.toString();

    if (!code) {
        return res.status(400).json({ message: "Authorization code missing. Please try logging in again." });
    }

    try {
        const tokens = await GOOGLE_CLIENT.getToken(code);

        const refresh_token = tokens?.tokens.refresh_token;
        const access_token = tokens?.tokens.access_token;
        const expiresAt = tokens?.tokens.expiry_date;

        if (!refresh_token || !access_token || !expiresAt) {
            return res.status(400).json({ message: "Failed to retrieve tokens. Please re-authenticate." });
        }

        const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const userInfo = response.data as GoogleSigninResponse;
        let user_id;

        const user = await PRISMA_CLIENT.users.findFirst({
            where:{
                google_sub: userInfo.sub
            }
        });

        if (user) {
            await PRISMA_CLIENT.users.update({
                where: { id: user.id },
                data: {
                    refresh_token,
                    access_token,
                    token_expiry: new Date(expiresAt)
                }
            });
            user_id = user.id;
        } else {
            const user = await PRISMA_CLIENT.users.create({
                data: {
                    token_expiry: new Date(expiresAt),
                    refresh_token,
                    access_token,
                    email: userInfo.email,
                    name: userInfo.name,
                    google_sub: userInfo.sub
                }
            });

            user_id = user.id;
        }

        const JWT_SECRET = process.env.JWT_SECRET!;
        const token = jwt.sign({ user_id }, JWT_SECRET);

        return res.status(200).json({
            token,
            expires_at: expiresAt,
            message: "Authentication successful. Use this token in the Authorization header as 'Bearer <token>' for protected routes."
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "An error occurred during authentication. Please try again later." });
    }
});

export default router;
