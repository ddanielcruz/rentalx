import { MemoryCarsRepository } from "@modules/cars/repositories/memory/memory-cars-repository";
import { AppError } from "@shared/errors/app-error";

import { CreateCarUseCase } from "./create-car-use-case";

describe("CreateCarUseCase", () => {
  let repository: MemoryCarsRepository;
  let sut: CreateCarUseCase;

  const FAKE_REQUEST = {
    name: "any-name",
    description: "any-description",
    dailyRate: 100,
    licensePlate: "any-license-plate",
    fineAmount: 100,
    brand: "any-brand",
    categoryId: "any-category-id",
  };

  beforeEach(() => {
    repository = new MemoryCarsRepository();
    sut = new CreateCarUseCase(repository);
  });

  it("should be able to create a new car", async () => {
    const car = await sut.execute(FAKE_REQUEST);
    expect(car.id).toBeTruthy();
  });

  it("should not be able to create a car with existing license plate", async () => {
    await sut.execute(FAKE_REQUEST);
    const promise = sut.execute(FAKE_REQUEST);
    await expect(promise).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await sut.execute(FAKE_REQUEST);
    expect(car.available).toBe(true);
  });
});
