import { DatabaseCategoriesRepository } from "../../repositories/implementations/database-categories-repository";
import { ImportCategoriesController } from "./import-categories-controller";
import { ImportCategoriesUseCase } from "./import-categories-use-case";

export default (): ImportCategoriesController => {
  const repository = new DatabaseCategoriesRepository();
  const useCase = new ImportCategoriesUseCase(repository);
  return new ImportCategoriesController(useCase);
};
