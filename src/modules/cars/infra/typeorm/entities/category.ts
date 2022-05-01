import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Car } from "./car";

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

  @OneToMany(() => Car, (car) => car.category)
  cars: Car[];

  constructor(name: string, description: string) {
    this.id = uuid();
    this.name = name;
    this.description = description;
  }
}
