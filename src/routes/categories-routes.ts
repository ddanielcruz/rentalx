import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/use-cases/create-category";
import { importCategoriesController } from "../modules/cars/use-cases/import-categories";
import { listCategoriesController } from "../modules/cars/use-cases/list-categories";

const routes = Router();
const upload = multer({ dest: "./tmp" });

routes.post("/", (req, res) => createCategoryController.handle(req, res));
routes.get("/", (req, res) => listCategoriesController.handle(req, res));
routes.post("/import", upload.single("file"), (req, res) =>
  importCategoriesController.handle(req, res)
);

export { routes };
