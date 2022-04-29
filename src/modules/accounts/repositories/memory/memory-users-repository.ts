import { ICreateUserDTO } from "@modules/accounts/dtos/create-user-dto";
import { User } from "@modules/accounts/entities/user";

import { IUsersRepository } from "../users-repository";

export class MemoryUsersRepository implements IUsersRepository {
  public readonly users: User[] = [];

  async create(dto: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, dto);
    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async update(): Promise<void> {
    //
  }
}
