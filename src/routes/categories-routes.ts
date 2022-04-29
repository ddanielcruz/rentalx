import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/use-cases/create-category/create-category-controller";
import { ImportCategoriesController } from "@modules/cars/use-cases/import-categories/import-categories-controller";
import { ListCategoriesController } from "@modules/cars/use-cases/list-categories/list-categories-controller";

import { ensureAuthenticated } from "../middleware/ensure-authenticated";

const routes = Router();
const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

routes.use(ensureAuthenticated);
routes.post("/", createCategoryController.handle);
routes.get("/", listCategoriesController.handle);
routes.post(
  "/import",
  upload.single("file"),
  importCategoriesController.handle
);

export { routes };
