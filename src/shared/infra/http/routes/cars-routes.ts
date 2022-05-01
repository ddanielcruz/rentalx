import { Router } from "express";

import { CreateCarController } from "@modules/cars/use-cases/create-car/create-car-controller";

import { ensureAdmin } from "../middleware/ensure-admin";
import { ensureAuthenticated } from "../middleware/ensure-authenticated";

export const routes = Router();
const createCarUseCase = new CreateCarController();

routes.post("/", ensureAuthenticated, ensureAdmin, createCarUseCase.handle);
