import { Category } from "../../models/category";
import { ICategoriesRepository } from "../../repositories/implementations/memory-categories-repository";

class ListCategoriesUseCase {
  constructor(private readonly repository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.repository.findAll();
  }
}

export { ListCategoriesUseCase };
