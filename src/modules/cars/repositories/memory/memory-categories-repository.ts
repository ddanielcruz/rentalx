import { Category } from "../../entities/category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../categories-repository";

export class MemoryCategoriesRepository implements ICategoriesRepository {
  public readonly categories: Category[] = [];

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category(name, description);
    this.categories.push(category);

    return category;
  }

  async findAll(): Promise<Category[]> {
    return this.categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    return this.categories.find((category) => category.name === name);
  }
}
