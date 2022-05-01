import { container } from "tsyringe";

import { DatabaseUsersRepository } from "@modules/accounts/infra/typeorm/repositories/database-users-repository";
import { IUsersRepository } from "@modules/accounts/repositories/users-repository";
import { DatabaseCarsRepository } from "@modules/cars/infra/typeorm/repositories/database-cars-repository";
import { DatabaseCategoriesRepository } from "@modules/cars/infra/typeorm/repositories/database-categories-repository";
import { DatabaseSpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/database-specifications-repository";
import { ICarsRepository } from "@modules/cars/repositories/cars-repository";
import { ICategoriesRepository } from "@modules/cars/repositories/categories-repository";
import { ISpecificationsRepository } from "@modules/cars/repositories/specifications-repository";

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  DatabaseCarsRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  DatabaseCategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  DatabaseSpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  DatabaseUsersRepository
);
