import { Category } from "../infra/typeorm/entities/category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create(dto: ICreateCategoryDTO): Promise<Category>;
  findAll(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}
