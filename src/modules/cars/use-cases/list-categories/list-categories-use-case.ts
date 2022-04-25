import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/categories-repository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private readonly repository: ICategoriesRepository
  ) {}

  execute(): Promise<Category[]> {
    return this.repository.findAll();
  }
}

export { ListCategoriesUseCase };
