import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./create-car-use-case";

export class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(CreateCarUseCase);
    const car = await useCase.execute(request.body);

    return response.status(201).json(car);
  }
}
