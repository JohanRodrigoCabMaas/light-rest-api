import { hash } from 'bcryptjs';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuariosAnonimos')
export class UsuarioAnonimo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  usuarioname: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPasword() {
    if (!this.password) return;
    this.password = await hash(this.password, 10);
  }
}
