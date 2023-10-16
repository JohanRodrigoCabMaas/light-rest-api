import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dashboard' })
export class Dashboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateName: string;

  @Column()
  total: string;

  @Column({ default: true })
  isActive: boolean;
}
