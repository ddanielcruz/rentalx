import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/categories-repository";
import { DatabaseCategoriesRepository } from "../../modules/cars/repositories/implementations/database-categories-repository";
import { MemorySpecificationsRepository } from "../../modules/cars/repositories/implementations/memory-specifications-repository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/specifications-repository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  DatabaseCategoriesRepository
);

container.registerInstance<ISpecificationsRepository>(
  "SpecificationsRepository",
  MemorySpecificationsRepository.getInstance()
);
