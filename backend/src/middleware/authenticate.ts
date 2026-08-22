import type { RequestHandler } from "express";
import { verifyAccessToken } from "../services/token.service.js";
import { AppError } from "../utils/app-error.js";

export const authenticate: RequestHandler = (request, _response, next) => {
  const token = request.cookies?.access_token;
  if (typeof token !== "string") {
    next(new AppError(401, "UNAUTHENTICATED", "Authentication is required."));
    return;
  }

  try {
    request.auth = { userId: verifyAccessToken(token).sub };
    next();
  } catch {
    next(new AppError(401, "UNAUTHENTICATED", "Authentication is required."));
  }
};
