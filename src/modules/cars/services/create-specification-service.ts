import { Specification } from "../models/specification";
import { ISpecificationsRepository } from "../repositories/specifications-repository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private readonly repository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const alreadyExists = this.repository.findByName(name);
    if (alreadyExists) {
      throw new Error("Specification already exists.");
    }

    return this.repository.create({ name, description });
  }
}

export { CreateSpecificationService };
