import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioAnonimo } from './entities/usuarios-anonimos.entity';
import { UsuarioAnonimoRepository } from './usuario.repository';
import { CreateUsuarioAnonimoDto } from './dto/create-usuario.dto';
import { paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { usuarioAnonimoPaginationCOnfig } from './config/config';
import { UpdateUsuarioAnonimoDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosAnonimosService {
  constructor(
    @InjectRepository(UsuarioAnonimo)
    private readonly usuarioAnonimoRepository: UsuarioAnonimoRepository,
  ) {}
  async create(createUsuarioAnonimoDto: CreateUsuarioAnonimoDto) {
    const usuarioAnonimoCreated = this.usuarioAnonimoRepository.create(
      createUsuarioAnonimoDto,
    );
    return this.usuarioAnonimoRepository.save(usuarioAnonimoCreated);
  }
  async findAll(
    paginationQuery: PaginateQuery,
  ): Promise<Paginated<UsuarioAnonimo>> {
    return paginate(
      paginationQuery,
      this.usuarioAnonimoRepository,
      usuarioAnonimoPaginationCOnfig,
    );
  }

  findOne(id: number) {
    return this.usuarioAnonimoRepository.findOneBy({ id });
  }
  async update(id: number, updateUsuarioAnonimoDteo: UpdateUsuarioAnonimoDto) {
    const usuario = await this.usuarioAnonimoRepository.findOneBy({ id });
    if (updateUsuarioAnonimoDteo.password) {
      usuario.password = await this.encryptPassword(
        updateUsuarioAnonimoDteo.password,
      );
    }
    Object.assign(usuario, updateUsuarioAnonimoDteo);
    const updatedUser = await this.usuarioAnonimoRepository.save(usuario);
    return updatedUser;
  }

  async delete(id: number) {
    const usuarioAnonimo = await this.usuarioAnonimoRepository.findOneBy({
      id,
    });
    return this.usuarioAnonimoRepository.save({ ...usuarioAnonimo });
  }
  //funcion para mantener el encriptado al actualizar
  private async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
}
