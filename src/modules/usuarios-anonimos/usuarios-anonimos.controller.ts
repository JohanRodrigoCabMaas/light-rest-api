import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsuariosAnonimosService } from './usuarios-anonimos.service';
import { CreateUsuarioAnonimoDto } from './dto/create-usuario.dto';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { UsuarioAnonimo } from './entities/usuarios-anonimos.entity';
import { UpdateUsuarioAnonimoDto } from './dto/update-usuario.dto';

@Controller('usuarios-anonimos')
export class UsuariosAnonimosController {
  constructor(private readonly usuarioService: UsuariosAnonimosService) {}

  @Post()
  create(@Body() createUsuarioAnonimoDto: CreateUsuarioAnonimoDto) {
    return this.usuarioService.create(createUsuarioAnonimoDto);
  }

  @Get()
  findAll(
    @Paginate() paginateQuery: PaginateQuery,
  ): Promise<Paginated<UsuarioAnonimo>> {
    return this.usuarioService.findAll(paginateQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsuarioAnonimoDteo: UpdateUsuarioAnonimoDto,
  ) {
    return this.usuarioService.update(+id, updateUsuarioAnonimoDteo);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usuarioService.delete(+id);
  }
}
