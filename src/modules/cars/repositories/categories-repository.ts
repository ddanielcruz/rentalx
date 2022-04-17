import { Category } from "../models/category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create(dto: ICreateCategoryDTO): Category;
  findAll(): Category[];
  findByName(name: string): Category | undefined;
}
