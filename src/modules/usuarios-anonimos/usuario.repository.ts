import { EntityRepository, Repository } from 'typeorm';
import { UsuarioAnonimo } from './entities/usuarios-anonimos.entity';

@EntityRepository(UsuarioAnonimo)
export class UsuarioAnonimoRepository extends Repository<UsuarioAnonimo> {}
