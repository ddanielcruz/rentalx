import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/categories-repository";
import { CreateCategoryService } from "../modules/cars/services/create-category-service";

const routes = Router();
const repository = new CategoriesRepository();

routes.post("/", (request, response) => {
  try {
    const { name, description } = request.body;
    const service = new CreateCategoryService(repository);
    const category = service.execute({ name, description });

    return response.status(201).json(category);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

routes.get("/", (_request, response) => {
  const categories = repository.findAll();
  return response.json(categories);
});

export { routes };
