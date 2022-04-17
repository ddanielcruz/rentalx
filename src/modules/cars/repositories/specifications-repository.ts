import { Specification } from "../models/specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create(dto: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification | undefined;
}
