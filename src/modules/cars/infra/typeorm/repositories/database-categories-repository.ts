import { getRepository, Repository } from "typeorm";

import { Category } from "@modules/cars/infra/typeorm/entities/category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "@modules/cars/repositories/categories-repository";

export class DatabaseCategoriesRepository implements ICategoriesRepository {
  private static INSTANCE: DatabaseCategoriesRepository;

  private readonly repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category(name, description);
    return this.repository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.repository.find();
  }
  findByName(name: string): Promise<Category | undefined> {
    return this.repository.findOne({ name });
  }
}
