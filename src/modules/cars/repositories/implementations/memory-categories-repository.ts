import { Category } from "../../models/category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../categories-repository";

export class MemoryCategoriesRepository implements ICategoriesRepository {
  private static INSTANCE: MemoryCategoriesRepository;

  private readonly categories: Category[];

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): MemoryCategoriesRepository {
    if (!MemoryCategoriesRepository.INSTANCE) {
      MemoryCategoriesRepository.INSTANCE = new MemoryCategoriesRepository();
    }

    return MemoryCategoriesRepository.INSTANCE;
  }

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
