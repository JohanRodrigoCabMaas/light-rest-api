import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dashboard' })
export class Dashboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalSum: number;

  @Column({ default: true })
  isActive: boolean;
}
