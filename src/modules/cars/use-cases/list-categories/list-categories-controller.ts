import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./list-categories-use-case";

class ListCategoriesController {
  constructor(private readonly useCase: ListCategoriesUseCase) {}

  async handle(_request: Request, response: Response): Promise<Response> {
    const categories = await this.useCase.execute();
    return response.json(categories);
  }
}

export { ListCategoriesController };
