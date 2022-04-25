import { Router } from "express";

import { CreateUserController } from "../modules/accounts/use-cases/create-user/create-user-controller";

export const routes = Router();
const createUserController = new CreateUserController();

routes.post("/", createUserController.handle);
