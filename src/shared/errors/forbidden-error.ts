import { AppError } from "./app-error";

export class ForbiddenError extends AppError {
  constructor() {
    super("You don't have permission to perform this action.", 403);
  }
}
