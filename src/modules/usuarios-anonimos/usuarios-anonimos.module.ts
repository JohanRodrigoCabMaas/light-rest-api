import { Module } from '@nestjs/common';
import { UsuariosAnonimosController } from './usuarios-anonimos.controller';
import { UsuariosAnonimosService } from './usuarios-anonimos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioAnonimo } from './entities/usuarios-anonimos.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioAnonimo])],
  controllers: [UsuariosAnonimosController],
  providers: [UsuariosAnonimosService, ConfigService],
})
export class UsuariosAnonimosModule {}
