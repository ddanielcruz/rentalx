import { Car } from "@modules/cars/infra/typeorm/entities/car";
import { ICarsRepository } from "@modules/cars/repositories/cars-repository";
import { AppError } from "@shared/errors/app-error";

interface IRequest {
  name: string;
  description: string;
  dailyRate: number;
  licensePlate: string;
  fineAmount: number;
  brand: string;
  categoryId?: string;
}

export class CreateCarUseCase {
  constructor(private readonly repository: ICarsRepository) {}

  async execute(request: IRequest): Promise<Car> {
    const alreadyExists = await this.repository.findByLicensePlate(
      request.licensePlate
    );

    if (alreadyExists) {
      throw new AppError("Car already exists!");
    }

    return this.repository.create(request);
  }
}
