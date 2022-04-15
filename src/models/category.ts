import { v4 as uuid } from "uuid";

export class Category {
  id: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor(name: string, description: string) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
  }
}
