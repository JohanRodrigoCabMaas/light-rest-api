import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  size: string;

  @Column()
  price: number;

  @Column()
  availability: string;

  @Column({ default: true })
  isActive: boolean;
}
