import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/create-user-dto";
import { IUsersRepository } from "../../repositories/users-repository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly repository: IUsersRepository
  ) {}

  async execute(dto: ICreateUserDTO): Promise<void> {
    await this.repository.create(dto);
  }
}
