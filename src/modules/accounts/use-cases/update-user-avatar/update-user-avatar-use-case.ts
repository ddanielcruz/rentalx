import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/users-repository";
import { deleteFile } from "@shared/helpers/file";

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly repository: IUsersRepository
  ) {}

  async execute({ userId, avatarFile }: IRequest) {
    const user = await this.repository.findById(userId);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatarFile;
    await this.repository.update(user);
  }
}
