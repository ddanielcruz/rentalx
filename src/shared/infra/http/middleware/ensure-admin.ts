import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/users-repository";
import { ForbiddenError } from "@shared/errors/forbidden-error";

export async function ensureAdmin(
  request: Request,
  _response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  const repository = container.resolve<IUsersRepository>("UsersRepository");
  const user = await repository.findById(id);

  if (!user?.isAdmin) {
    throw new ForbiddenError();
  }

  next();
}
