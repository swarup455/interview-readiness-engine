import type { Request, Response } from "express";
import { prisma } from "../db/prisma.js";

export async function getDatabaseHealth(_request: Request, response: Response): Promise<void> {
  try {
    await prisma.$queryRaw`SELECT 1`;

    response.status(200).json({
      data: {
        status: "ok",
        database: "available",
      },
    });
  } catch {
    response.status(503).json({
      error: {
        code: "DATABASE_UNAVAILABLE",
        message: "Database connectivity is unavailable.",
      },
    });
  }
}
