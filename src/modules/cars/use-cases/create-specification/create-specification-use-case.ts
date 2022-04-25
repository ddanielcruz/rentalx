import { Specification } from "../../entities/specification";
import { ISpecificationsRepository } from "../../repositories/specifications-repository";

interface IRequest {
  name: string;
  description: string;
}
export class CreateSpecificationUseCase {
  constructor(private readonly repository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const alreadyExists = this.repository.findByName(name);
    if (alreadyExists) {
      throw new Error("Specification already exists.");
    }

    return this.repository.create({ name, description });
  }
}
