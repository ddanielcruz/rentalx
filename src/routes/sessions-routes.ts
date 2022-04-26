import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/use-cases/authenticate-user/authenticate-user-controller";

export const routes = Router();
const authenticateUserController = new AuthenticateUserController();

routes.post("/", authenticateUserController.handle);
