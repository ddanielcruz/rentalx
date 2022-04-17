import { MemoryCategoriesRepository } from "../../repositories/implementations/memory-categories-repository";
import { CreateCategoryController } from "./create-category-controller";
import { CreateCategoryUseCase } from "./create-category-use-case";

const repository = MemoryCategoriesRepository.getInstance();
const useCase = new CreateCategoryUseCase(repository);
export const createCategoryController = new CreateCategoryController(useCase);
