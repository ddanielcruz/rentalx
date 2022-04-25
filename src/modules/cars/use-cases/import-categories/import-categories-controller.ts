import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoriesUseCase } from "./import-categories-use-case";

export class ImportCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const useCase = container.resolve(ImportCategoriesUseCase);
    await useCase.execute(file);

    return response.status(204).send();
  }
}
