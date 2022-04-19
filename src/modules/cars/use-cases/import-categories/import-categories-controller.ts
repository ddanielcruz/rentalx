import { Request, Response } from "express";

import { ImportCategoriesUseCase } from "./import-categories-use-case";

export class ImportCategoriesController {
  constructor(
    private readonly importCategoriesUseCase: ImportCategoriesUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importCategoriesUseCase.execute(file);

    return response.status(204).send();
  }
}
