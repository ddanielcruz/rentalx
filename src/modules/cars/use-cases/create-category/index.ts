import { DatabaseCategoriesRepository } from "../../repositories/implementations/database-categories-repository";
import { CreateCategoryController } from "./create-category-controller";
import { CreateCategoryUseCase } from "./create-category-use-case";

export default (): CreateCategoryController => {
  const repository = new DatabaseCategoriesRepository();
  const useCase = new CreateCategoryUseCase(repository);
  return new CreateCategoryController(useCase);
};
