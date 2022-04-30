import { ICreateCarDTO } from "../dtos/create-car-dto";
import { Car } from "../infra/typeorm/entities/car";

export interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(licensePlate: string): Promise<Car | undefined>;
}
