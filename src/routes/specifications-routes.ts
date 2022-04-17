import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/specifications-repository";
import { CreateSpecificationService } from "../modules/cars/services/create-specification-service";

const routes = Router();
const repository = new SpecificationsRepository();

routes.post("/", (request, response) => {
  const { name, description } = request.body;
  const service = new CreateSpecificationService(repository);
  const spec = service.execute({ name, description });

  return response.status(201).json(spec);
});

export { routes };
