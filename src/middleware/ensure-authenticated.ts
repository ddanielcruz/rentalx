import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";

import { UnauthorizedError } from "../errors/unauthorized-error";
import { IUsersRepository } from "../modules/accounts/repositories/users-repository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<void> {
  const { authorization } = request.headers;
  if (!authorization) {
    throw new UnauthorizedError("Access token is missing!");
  }

  const [, token] = authorization.split(" ");
  try {
    const { sub } = verify(token, process.env.SECRET) as IPayload;
    const repository = container.resolve<IUsersRepository>("UsersRepository");
    const user = await repository.findById(sub);

    if (!user) {
      throw new UnauthorizedError("User does not exists.");
    }
  } catch (error) {
    throw new UnauthorizedError("Token is not valid.");
  }

  next();
}
