import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/categories-repository";
import { createCategoryController } from "../modules/cars/use-cases/create-category";

const routes = Router();
const repository = new CategoriesRepository();

routes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

routes.get("/", (_request, response) => {
  const categories = repository.findAll();
  return response.json(categories);
});

export { routes };
