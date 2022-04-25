import { DatabaseCategoriesRepository } from "../../repositories/implementations/database-categories-repository";
import { ListCategoriesController } from "./list-categories-controller";
import { ListCategoriesUseCase } from "./list-categories-use-case";

export default (): ListCategoriesController => {
  const repository = new DatabaseCategoriesRepository();
  const useCase = new ListCategoriesUseCase(repository);
  return new ListCategoriesController(useCase);
};
