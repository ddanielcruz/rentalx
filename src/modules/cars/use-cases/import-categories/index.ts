import { MemoryCategoriesRepository } from "../../repositories/implementations/memory-categories-repository";
import { ImportCategoriesController } from "./import-categories-controller";
import { ImportCategoriesUseCase } from "./import-categories-use-case";

const importCategoriesUseCase = new ImportCategoriesUseCase(
  MemoryCategoriesRepository.getInstance()
);
export const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase
);
