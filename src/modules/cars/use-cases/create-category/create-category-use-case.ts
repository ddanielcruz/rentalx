import { Category } from "../../models/category";
import { ICategoriesRepository } from "../../repositories/implementations/memory-categories-repository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private readonly repository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): Category {
    const alreadyExists = this.repository.findByName(name);
    if (alreadyExists) {
      throw new Error("Category already exists!");
    }

    return this.repository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
