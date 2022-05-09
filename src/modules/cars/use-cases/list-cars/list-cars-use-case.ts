import { Car } from "@modules/cars/infra/typeorm/entities/car";
import { ICarsRepository } from "@modules/cars/repositories/cars-repository";

interface IRequest {
  categoryId?: string;
  name?: string;
  brand?: string;
}

export class ListCarsUseCase {
  constructor(private readonly repository: ICarsRepository) {}

  async execute({ categoryId, brand, name }: IRequest = {}): Promise<Car[]> {
    return this.repository.findAvailable(categoryId, name, brand);
  }
}
