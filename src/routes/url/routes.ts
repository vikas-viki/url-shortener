import express, { Router } from "express";
import { rateLimitMiddleware } from "../../middlewares/rate-limit.js";
import { createShortUrlHandler, getAliasUrlIdDetailsHandler, getAllTopicsHandler, getAllUrlsHanlder } from "./controllers.js";

const router: express.Router = Router();

router.post("/create", rateLimitMiddleware, createShortUrlHandler);

router.get("/", getAllUrlsHanlder);

router.get("/topics", getAllTopicsHandler);

router.get("/:id", getAliasUrlIdDetailsHandler);

export default router;