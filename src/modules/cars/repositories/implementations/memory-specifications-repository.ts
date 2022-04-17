import { Specification } from "../../models/specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../specifications-repository";

export class MemorySpecificationsRepository
  implements ISpecificationsRepository
{
  private readonly specifications: Specification[] = [];

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification(name, description);
    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find((spec) => spec.name === name);
  }
}
