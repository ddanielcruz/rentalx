import { Category } from "../entities/category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create(dto: ICreateCategoryDTO): Promise<Category>;
  findAll(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}
