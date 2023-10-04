import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from '@api-modules/auth/dto/login.dto';
import * as bcrypt from 'bcrypt';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { userPaginationConfig } from './config/config';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const userCreated = this._userRepository.create(createUserDto);
    return this._userRepository.save(userCreated);
  }

  async findAll(paginationQuery: PaginateQuery): Promise<Paginated<User>> {
    return paginate(
      paginationQuery,
      this._userRepository,
      userPaginationConfig,
    );
  }

  findOne(id: number) {
    return this._userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this._userRepository.findOneBy({ id });
    user.password = await this.encryptPassword(updateUserDto.password || '');
    const updatedUser = await this._userRepository.save(user);
    return updatedUser;
  }

  async remove(id: number) {
    const user = await this._userRepository.findOneBy({ id });
    return this._userRepository.save({ ...user, isActive: false });
  }

  async findByCreadentials(loginDto: LoginDto) {
    return this._userRepository.findOneBy(loginDto);
  }
  //funcion para mantener el encriptado al actualizar
  private async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
}
