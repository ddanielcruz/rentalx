import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./list-categories-use-case";

class ListCategoriesController {
  constructor(private readonly useCase: ListCategoriesUseCase) {}

  handle(_request: Request, response: Response) {
    const categories = this.useCase.execute();
    return response.json(categories);
  }
}

export { ListCategoriesController };
