import { Router } from "express";

import { createCategoryController } from "../modules/cars/use-cases/create-category";
import { listCategoriesController } from "../modules/cars/use-cases/list-categories";

const routes = Router();

routes.post("/", (req, res) => createCategoryController.handle(req, res));
routes.get("/", (req, res) => listCategoriesController.handle(req, res));

export { routes };
