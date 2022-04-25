import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./list-categories-use-case";

class ListCategoriesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(ListCategoriesUseCase);
    const categories = await useCase.execute();

    return response.json(categories);
  }
}

export { ListCategoriesController };
