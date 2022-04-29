import { AppError } from "@errors/app-error";
import { ICreateCategoryDTO } from "@modules/cars/repositories/categories-repository";
import { MemoryCategoriesRepository } from "@modules/cars/repositories/memory/memory-categories-repository";

import { CreateCategoryUseCase } from "./create-category-use-case";

const FAKE_DTO: ICreateCategoryDTO = {
  name: "any-name",
  description: "any-description",
};

describe("CreateCategoryUseCase", () => {
  let repositoryStub: MemoryCategoriesRepository;
  let sut: CreateCategoryUseCase;

  beforeEach(() => {
    repositoryStub = new MemoryCategoriesRepository();
    sut = new CreateCategoryUseCase(repositoryStub);
  });

  it("should be able to create a new category", async () => {
    const category = await sut.execute(FAKE_DTO);
    expect(category).toMatchObject(FAKE_DTO);
    expect(repositoryStub.categories).toEqual([category]);
  });

  it("should throw an error when category already exists", async () => {
    await expect(async () => {
      await repositoryStub.create(FAKE_DTO);
      await sut.execute(FAKE_DTO);
    }).rejects.toBeInstanceOf(AppError);
  });
});
