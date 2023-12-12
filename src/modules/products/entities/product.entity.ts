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
  price: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  imagePath: string;
}
