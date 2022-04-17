import { Specification } from "../models/specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create(dto: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification | undefined;
}

class SpecificationsRepository implements ISpecificationsRepository {
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

export { ISpecificationsRepository, SpecificationsRepository };
