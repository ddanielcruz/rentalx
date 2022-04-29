import "dotenv/config";
import express from "express";
import swaggerUI from "swagger-ui-express";

import "express-async-errors";

import "@shared/infra/typeorm";
import "@shared/container";

import swaggerFile from "../../../swagger.json";
import { errorHandler } from "./middleware/error-handler";
import { routes } from "./routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
