import { Router } from "express";

import { CategoriesRepository } from "../repositories/categories-repository";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const alreadyExists = categoriesRepository.findByName(name);

  if (alreadyExists) {
    return response.status(400).json({ error: "Category already exists." });
  }

  const category = categoriesRepository.create({ name, description });

  return response.status(201).json(category);
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.findAll();
  return response.json(categories);
});
