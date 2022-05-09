import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/create-car-dto";
import { ICarsRepository } from "@modules/cars/repositories/cars-repository";

import { Car } from "../entities/car";

export class DatabaseCarsRepository implements ICarsRepository {
  private readonly repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  create({
    categoryId,
    name,
    description,
    licensePlate,
    fineAmount,
    dailyRate,
    brand,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      categoryId,
      name,
      description,
      licensePlate,
      fineAmount,
      dailyRate,
      brand,
    });

    return this.repository.save(car);
  }

  findByLicensePlate(licensePlate: string): Promise<Car | undefined> {
    return this.repository.findOne({ licensePlate });
  }

  findAvailable(): Promise<Car[]> {
    return this.repository.find({ available: true });
  }
}
