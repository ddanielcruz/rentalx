import { CategoriesRepository } from "../../repositories/categories-repository";
import { ListCategoriesController } from "./list-categories-controller";
import { ListCategoriesUseCase } from "./list-categories-use-case";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
