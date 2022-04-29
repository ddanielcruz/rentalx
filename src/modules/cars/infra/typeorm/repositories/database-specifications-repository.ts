import { getRepository, Repository } from "typeorm";

import { Specification } from "@modules/cars/infra/typeorm/entities/specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/specifications-repository";

export class DatabaseSpecificationsRepository
  implements ISpecificationsRepository
{
  private readonly repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification(name, description);
    return this.repository.save(specification);
  }

  findByName(name: string): Promise<Specification | undefined> {
    return this.repository.findOne({ name });
  }
}
