import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/use-cases/create-specification/create-specification-controller";

import { ensureAdmin } from "../middleware/ensure-admin";
import { ensureAuthenticated } from "../middleware/ensure-authenticated";

const routes = Router();
const createSpecificationController = new CreateSpecificationController();

routes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

export { routes };
