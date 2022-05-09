import { ICreateCarDTO } from "@modules/cars/dtos/create-car-dto";
import { MemoryCarsRepository } from "@modules/cars/repositories/memory/memory-cars-repository";

import { ListCarsUseCase } from "./list-cars-use-case";

const FAKE_CREATE_DTO: ICreateCarDTO = {
  name: "any-name",
  description: "any-description",
  brand: "any-brand",
  dailyRate: 0,
  fineAmount: 0,
  licensePlate: "any-license-plate",
};

describe("ListCarsUseCase", () => {
  let repository: MemoryCarsRepository;
  let sut: ListCarsUseCase;

  beforeEach(async () => {
    repository = new MemoryCarsRepository();
    sut = new ListCarsUseCase(repository);
    await repository.create(FAKE_CREATE_DTO);
  });

  it("should be able to list all available cars", async () => {
    const cars = await sut.execute();
    expect(cars.length).toBe(1);
    expect(cars[0]).toMatchObject(FAKE_CREATE_DTO);
  });
});
