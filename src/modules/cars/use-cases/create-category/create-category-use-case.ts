import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/categories-repository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private readonly repository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const alreadyExists = await this.repository.findByName(name);
    if (alreadyExists) {
      throw new Error("Category already exists!");
    }

    return this.repository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
