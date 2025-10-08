import express from "express";
import helmet from "helmet";
import { initializeGoogleAuth, initializePrismaClient, initializeRedis, initializeSQS, areAllEnvsLoaded } from "./utils/initialiser.js";
import dotenv from 'dotenv';
import requestIp from "request-ip";
import { redirectUser } from "./utils/helpers.js";
import apiRouter from "./routes/index.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(requestIp.mw());

areAllEnvsLoaded();
export const PRISMA_CLIENT = initializePrismaClient();
export const REDIS_CLIENT = initializeRedis();
export const SQS_CLIENT = initializeSQS();
export const GOOGLE_CLIENT = initializeGoogleAuth();


app.use("/api", apiRouter);
app.get("/:alias", redirectUser); // hander used to redirect url

const PORT = process.env.PORT || 5000;
app.listen(+PORT, '0.0.0.0',() => {
    console.log(`Server started on port ${PORT}`);
});


