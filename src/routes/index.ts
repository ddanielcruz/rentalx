import { Router } from "express";

import { routes as categories } from "./categories-routes";
import { routes as specifications } from "./specifications-routes";

export const routes = Router();
routes.use("/categories", categories);
routes.use("/specifications", specifications);
