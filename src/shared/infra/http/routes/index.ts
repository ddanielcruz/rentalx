import { Router } from "express";

import { routes as categories } from "./categories-routes";
import { routes as sessions } from "./sessions-routes";
import { routes as specifications } from "./specifications-routes";
import { routes as users } from "./users-routes";

export const routes = Router();
routes.use("/categories", categories);
routes.use("/sessions", sessions);
routes.use("/specifications", specifications);
routes.use("/users", users);
