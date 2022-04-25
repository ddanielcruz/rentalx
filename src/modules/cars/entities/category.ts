import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor(name: string, description: string) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
  }
}
