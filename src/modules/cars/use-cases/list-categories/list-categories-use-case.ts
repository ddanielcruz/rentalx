import { Category } from "../../models/category";
import { ICategoriesRepository } from "../../repositories/categories-repository";

class ListCategoriesUseCase {
  constructor(private readonly repository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.repository.findAll();
  }
}

export { ListCategoriesUseCase };
