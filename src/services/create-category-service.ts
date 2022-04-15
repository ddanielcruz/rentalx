import { Category } from "../models/category";
import { CategoriesRepository } from "../repositories/categories-repository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private readonly repository: CategoriesRepository) {}

  execute({ name, description }: IRequest): Category {
    const alreadyExists = this.repository.findByName(name);
    if (alreadyExists) {
      throw new Error("Category already exists!");
    }

    return this.repository.create({ name, description });
  }
}

export { CreateCategoryService };
