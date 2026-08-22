import type { Request, Response } from "express";

export function getHealth(_request: Request, response: Response): void {
  response.status(200).json({
    data: {
      status: "ok",
      service: "interview-readiness-engine-api",
    },
  });
}
