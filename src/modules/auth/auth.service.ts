import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly _jwtService: JwtService,
    private readonly _userService: UsersService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this._userService.findByCreadentials(loginDto);
    if (!user) throw new NotFoundException('This user does not exist.');

    return { access_token: this._jwtService.sign({ user }) };
  }
}
