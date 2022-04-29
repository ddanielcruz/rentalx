import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@modules/cars/repositories/categories-repository";

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
export class ImportCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private readonly repository: ICategoriesRepository
  ) {}

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);
    categories.forEach(async ({ name, description }) => {
      const categoryExists = await this.repository.findByName(name);
      if (!categoryExists) {
        await this.repository.create({ name, description });
      }
    });
  }

  private loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();
      const categories: IImportCategory[] = [];

      stream.pipe(parseFile);
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          return resolve(categories);
        })
        .on("error", reject);
    });
  }
}
