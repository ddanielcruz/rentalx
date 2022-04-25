import { Request, Response } from "express";

import { ImportCategoriesUseCase } from "./import-categories-use-case";

export class ImportCategoriesController {
  constructor(
    private readonly importCategoriesUseCase: ImportCategoriesUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    await this.importCategoriesUseCase.execute(file);

    return response.status(204).send();
  }
}
