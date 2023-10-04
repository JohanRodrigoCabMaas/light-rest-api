import { hash } from 'bcryptjs';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  fullName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ nullable: true })
  profileImageUrl: string;

  @Column('text', { nullable: true })
  bio: string;

  @Column({ default: 'en' })
  preferredLanguage: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  accountBalance: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  @BeforeInsert()
  @BeforeUpdate()
  async hashPasword() {
    if (!this.password) return;
    this.password = await hash(this.password, 10);
  }
}
