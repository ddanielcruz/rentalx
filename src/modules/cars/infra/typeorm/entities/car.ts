import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Category } from "./category";

@Entity({ name: "cars" })
export class Car {
  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar" })
  categoryId: string | null;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  dailyRate: number;

  @Column()
  available: boolean;

  @Column()
  licensePlate: string;

  @Column()
  fineAmount: number;

  @Column()
  brand: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Category, (category) => category.cars)
  category: Category;

  constructor() {
    this.id = uuid();
    this.available = true;
    this.createdAt = new Date();
  }
}
