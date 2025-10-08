import express from "express";
import { authCallbackHandler, getAuthUrlHandler } from "./controllers.js";

const router: express.Router = express.Router();

router.get("/", getAuthUrlHandler);

router.get("/callback", authCallbackHandler);

export default router;
