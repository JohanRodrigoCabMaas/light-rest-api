import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { ACGuard, UseRoles, UserRoles } from 'nest-access-control';
import { roles } from '@/app.roles';
import { JwtAuthGuard } from '@/core/guards/jwt-guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({
    resource: 'user',
    action: 'create',
    possession: 'any',
  })
  @Post()
  create(
    @Body() createUserDto: CreateUserDto,
    @UserRoles() userRoles: string[],
  ) {
    if (roles.can(userRoles).createAny('user').granted) {
      return this.usersService.create(createUserDto);
    }
  }

  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({
    resource: 'user',
    action: 'read',
    possession: 'any',
  })
  @Get()
  findAll(
    @Paginate() paginationQuery: PaginateQuery,
    @UserRoles() userRoles: string[],
  ): Promise<Paginated<User>> {
    if (roles.can(userRoles).createAny('user').granted) {
      return this.usersService.findAll(paginationQuery);
    }
  }

  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({
    resource: 'user',
    action: 'read',
    possession: 'any',
  })
  @Get(':id')
  findOne(@Param('id') id: string, @UserRoles() userRoles: string[]) {
    if (roles.can(userRoles).readAny('user').granted) {
      return this.usersService.findOne(+id);
    }
  }

  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({
    resource: 'user',
    action: 'update',
    possession: 'any',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UserRoles() userRoles: string[],
  ) {
    if (roles.can(userRoles).updateAny('user').granted) {
      return this.usersService.update(+id, updateUserDto);
    }
  }

  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({
    resource: 'user',
    action: 'delete',
    possession: 'any',
  })
  @Delete(':id')
  remove(@Param('id') id: string, @UserRoles() userRoles: string[]) {
    if (roles.can(userRoles).deleteAny('user').granted) {
      return this.usersService.remove(+id);
    }
  }
}
