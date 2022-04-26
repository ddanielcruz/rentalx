import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/app-error";
import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/categories-repository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private readonly repository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const alreadyExists = await this.repository.findByName(name);
    if (alreadyExists) {
      throw new AppError("Category already exists!");
    }

    return this.repository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
