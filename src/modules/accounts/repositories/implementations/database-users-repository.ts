import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/create-user-dto";
import { User } from "../../entities/user";
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
}
