import { inject, injectable } from "tsyringe";

import { Specification } from "@modules/cars/infra/typeorm/entities/specification";
import { ISpecificationsRepository } from "@modules/cars/repositories/specifications-repository";
import { AppError } from "@shared/errors/app-error";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private readonly repository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Specification> {
    const alreadyExists = await this.repository.findByName(name);
    if (alreadyExists) {
      throw new AppError("Specification already exists.");
    }

    return this.repository.create({ name, description });
  }
}
