import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/category";
import { ICategoriesRepository } from "@modules/cars/repositories/categories-repository";

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
