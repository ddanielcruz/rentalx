import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./create-category-use-case";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(CreateCategoryUseCase);
    const category = await useCase.execute(request.body);

    return response.status(201).json(category);
  }
}

export { CreateCategoryController };
