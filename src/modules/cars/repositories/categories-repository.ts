import { Category } from "../models/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create(dto: ICreateCategoryDTO): Category;
  findAll(): Category[];
  findByName(name: string): Category | undefined;
}

class CategoriesRepository implements ICategoriesRepository {
  private readonly categories: Category[] = [];

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category(name, description);
    this.categories.push(category);

    return category;
  }

  findAll(): Category[] {
    return [...this.categories];
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }
}

export { ICategoriesRepository, CategoriesRepository };
