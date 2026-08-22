import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { AppError } from "../utils/app-error.js";

const TOKEN_MAX_AGE_SECONDS = 60 * 60 * 8;

function getJwtSecret(): string {
  if (!env.JWT_SECRET || env.JWT_SECRET.length < 32) {
    throw new AppError(503, "AUTH_CONFIGURATION_ERROR", "Authentication is not configured.");
  }
  return env.JWT_SECRET;
}

export function signAccessToken(userId: string): string {
  return jwt.sign({ sub: userId }, getJwtSecret(), { expiresIn: TOKEN_MAX_AGE_SECONDS, issuer: "interview-readiness-engine", audience: "candidate" });
}

export function verifyAccessToken(token: string): { sub: string } {
  const payload = jwt.verify(token, getJwtSecret(), { issuer: "interview-readiness-engine", audience: "candidate" });
  if (typeof payload === "string" || typeof payload.sub !== "string") throw new Error("Invalid token subject.");
  return { sub: payload.sub };
}

export const accessTokenMaxAgeMs = TOKEN_MAX_AGE_SECONDS * 1000;
