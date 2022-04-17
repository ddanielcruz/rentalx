import express from "express";

import { routes as categories } from "./routes/categories-routes";
import { routes as specifications } from "./routes/specifications-routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use("/categories", categories);
app.use("/specifications", specifications);

app.listen(port, () => console.log(`Server is running on port ${port}`));
