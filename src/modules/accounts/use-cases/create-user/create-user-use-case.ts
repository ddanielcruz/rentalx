import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/app-error";
import { ICreateUserDTO } from "@modules/accounts/dtos/create-user-dto";
import { IUsersRepository } from "@modules/accounts/repositories/users-repository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly repository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driverLicense,
  }: ICreateUserDTO): Promise<void> {
    const alreadyExists = await this.repository.findByEmail(email);
    if (alreadyExists) {
      throw new AppError("User already exists.");
    }

    const hashedPassword = await hash(password, 8);
    await this.repository.create({
      name,
      email,
      password: hashedPassword,
      driverLicense,
    });
  }
}
