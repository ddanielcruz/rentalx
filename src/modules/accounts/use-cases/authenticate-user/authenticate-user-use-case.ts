import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/users-repository";
import { UnauthorizedError } from "@shared/errors/unauthorized-error";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly repository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedError("Invalid credentials!");
    }

    const samePassword = await compare(password, user.password);
    if (!samePassword) {
      throw new UnauthorizedError("Invalid credentials!");
    }

    const secret = process.env.SECRET;
    const token = sign({}, secret, { subject: user.id, expiresIn: "1d" });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    };
  }
}
