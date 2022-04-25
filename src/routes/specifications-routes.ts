import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/use-cases/create-specification/create-specification-controller";

const routes = Router();
const createSpecificationController = new CreateSpecificationController();

routes.post("/", createSpecificationController.handle);

export { routes };
