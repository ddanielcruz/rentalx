import { MemorySpecificationsRepository } from "../../repositories/implementations/memory-specifications-repository";
import { CreateSpecificationController } from "./create-specification-controller";
import { CreateSpecificationUseCase } from "./create-specification-use-case";

const repository = MemorySpecificationsRepository.getInstance();
const useCase = new CreateSpecificationUseCase(repository);
export const createSpecificationController = new CreateSpecificationController(
  useCase
);
