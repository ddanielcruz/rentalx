import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/categories-repository";

class ListCategoriesUseCase {
  constructor(private readonly repository: ICategoriesRepository) {}

  execute(): Promise<Category[]> {
    return this.repository.findAll();
  }
}

export { ListCategoriesUseCase };
