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

  @Column()
  identifierNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  total: string;

  @Column({ default: true })
  isActive: boolean;
}
