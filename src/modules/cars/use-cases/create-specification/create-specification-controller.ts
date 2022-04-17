import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./create-specification-use-case";

export class CreateSpecificationController {
  constructor(private readonly useCase: CreateSpecificationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;
      const specification = this.useCase.execute({
        name,
        description,
      });

      return response.status(201).json(specification);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
