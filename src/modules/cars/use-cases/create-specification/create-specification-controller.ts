import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./create-specification-use-case";

export class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;
      const useCase = container.resolve(CreateSpecificationUseCase);
      const specification = useCase.execute({ name, description });

      return response.status(201).json(specification);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
