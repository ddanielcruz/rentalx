import { Router } from "express";

import { CreateCarController } from "@modules/cars/use-cases/create-car/create-car-controller";

export const routes = Router();
const createCarUseCase = new CreateCarController();

routes.post("/", createCarUseCase.handle);
