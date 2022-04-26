import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./update-user-avatar-use-case";

export class UpdateUserAvatarController {
  async handle({ user, file }: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(UpdateUserAvatarUseCase);
    await useCase.execute({ userId: user.id, avatarFile: file.filename });

    return response.status(204).send();
  }
}
