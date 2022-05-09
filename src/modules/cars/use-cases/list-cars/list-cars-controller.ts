import { Request, Response } from "express";

export class ListCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response;
  }
}
