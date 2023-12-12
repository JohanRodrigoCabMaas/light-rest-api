import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'configurations' })
export class Configuration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameCompany: string;

  @Column()
  phoneNumber: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column({ nullable: true })
  country: string;
}
