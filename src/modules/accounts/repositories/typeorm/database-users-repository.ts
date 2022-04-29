import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/create-user-dto";
import { User } from "@modules/accounts/entities/user";

import { IUsersRepository } from "../users-repository";

export class DatabaseUsersRepository implements IUsersRepository {
  private readonly repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  create(dto: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, dto);

    return this.repository.save(user);
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ email });
  }

  findById(id: string): Promise<User> {
    return this.repository.findOne(id);
  }

  async update(user: User): Promise<void> {
    await this.repository.save(user);
  }
}
