import { ICreateUserDTO } from "../dtos/create-user-dto";
import { User } from "../entities/user";

export interface IUsersRepository {
  create(dto: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
