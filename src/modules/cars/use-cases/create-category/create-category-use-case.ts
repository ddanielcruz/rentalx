import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/category";
import { ICategoriesRepository } from "@modules/cars/repositories/categories-repository";
import { AppError } from "@shared/errors/app-error";

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
