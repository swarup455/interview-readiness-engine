import { Router } from "express";
import { getDatabaseHealth } from "../controllers/database-health.controller.js";
import { getHealth } from "../controllers/health.controller.js";

export const apiRouter = Router();

apiRouter.get("/health", getHealth);
apiRouter.get("/health/database", getDatabaseHealth);
