import { Router } from "express";

import { createSpecificationController } from "../modules/cars/use-cases/create-specification";

const routes = Router();

routes.post("/", (req, res) => createSpecificationController.handle(req, res));

export { routes };
