import { MemoryCategoriesRepository } from "../../repositories/implementations/memory-categories-repository";
import { ListCategoriesController } from "./list-categories-controller";
import { ListCategoriesUseCase } from "./list-categories-use-case";

const repository = MemoryCategoriesRepository.getInstance();
const useCase = new ListCategoriesUseCase(repository);
export const listCategoriesController = new ListCategoriesController(useCase);
