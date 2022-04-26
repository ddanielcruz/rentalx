import "dotenv/config";
import express from "express";
import swaggerUI from "swagger-ui-express";
import "express-async-errors";

import "./database";
import "./shared/container";

import { errorHandler } from "./middleware/error-handler";
import { routes } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
