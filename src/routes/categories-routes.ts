import { Router } from "express";
import multer from "multer";

import makeCreateCategory from "../modules/cars/use-cases/create-category";
import makeImportCategories from "../modules/cars/use-cases/import-categories";
import makeListCategories from "../modules/cars/use-cases/list-categories";

const routes = Router();
const upload = multer({ dest: "./tmp" });

routes.post("/", (req, res) => makeCreateCategory().handle(req, res));
routes.get("/", (req, res) => makeListCategories().handle(req, res));
routes.post("/import", upload.single("file"), (req, res) =>
  makeImportCategories().handle(req, res)
);

export { routes };
