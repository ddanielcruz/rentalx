import { container } from "tsyringe";

import { DatabaseUsersRepository } from "@modules/accounts/repositories/typeorm/database-users-repository";
import { IUsersRepository } from "@modules/accounts/repositories/users-repository";
import { ICategoriesRepository } from "@modules/cars/repositories/categories-repository";
import { ISpecificationsRepository } from "@modules/cars/repositories/specifications-repository";
import { DatabaseCategoriesRepository } from "@modules/cars/repositories/typeorm/database-categories-repository";
import { DatabaseSpecificationsRepository } from "@modules/cars/repositories/typeorm/database-specifications-repository";

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
