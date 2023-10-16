import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tables' })
export class Table {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  size: string;
  @Column()
  type: string;
  @Column()
  numberOfChairs: string;
  @Column({ default: true })
  isActive: boolean;
}
