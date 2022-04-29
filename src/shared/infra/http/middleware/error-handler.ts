/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/errors/app-error";

export function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ error: error.message });
  }

  return response.status(500).json({
    error: `Internal server error - ${error.message}`,
  });
}
