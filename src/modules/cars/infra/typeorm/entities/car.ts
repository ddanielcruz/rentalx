import { v4 as uuid } from "uuid";

export class Car {
  id: string;
  categoryId: string | null;
  name: string;
  description: string;
  dailyRate: number;
  available: boolean;
  licensePlate: string;
  fineAmount: number;
  brand: string;
  createdAt: Date;

  constructor() {
    this.id = uuid();
    this.available = true;
    this.createdAt = new Date();
  }
}
