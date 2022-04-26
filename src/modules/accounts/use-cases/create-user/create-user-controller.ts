import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./create-user-use-case";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(CreateUserUseCase);
    await useCase.execute(request.body);

    return response.status(201).send();
  }
}
