import { Router } from "express";
import authRouter from "./auth/routes.js";
import { authorizeUser } from "../middlewares/auth.js";
import urlRouter from "./url/routes.js"
import analyticsRouter from "./analytics/routes.js";
import type { Request, Response } from "express";

const apiRouter: Router = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/urls", authorizeUser, urlRouter);
apiRouter.use("/analytics", authorizeUser, analyticsRouter);
apiRouter.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is healthy" });
});

export default apiRouter;