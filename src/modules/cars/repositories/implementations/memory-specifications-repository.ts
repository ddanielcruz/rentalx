import { Specification } from "../../models/specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../specifications-repository";

export class MemorySpecificationsRepository
  implements ISpecificationsRepository
{
  private static INSTANCE: MemorySpecificationsRepository;

  private readonly specifications: Specification[];

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): MemorySpecificationsRepository {
    if (!MemorySpecificationsRepository.INSTANCE) {
      MemorySpecificationsRepository.INSTANCE =
        new MemorySpecificationsRepository();
    }

    return MemorySpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification(name, description);
    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find((spec) => spec.name === name);
  }
}
