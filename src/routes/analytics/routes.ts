import express, { Router } from "express";
import { aliasHandler, overallAnalyticsHandler, topicHandler } from "./controllers.js";

const router: express.Router = Router();

router.get("/alias/:alias", aliasHandler);

router.get("/topic/:topic", topicHandler);

router.get("/overall", overallAnalyticsHandler);


export default router;
