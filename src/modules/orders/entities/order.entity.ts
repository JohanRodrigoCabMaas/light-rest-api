import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  total: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 }) // Valor predeterminado a 0
  weeklyOrderCount: number;
}
