import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

const typeOrmFeature = TypeOrmModule.forFeature([User]);

@Module({
  imports: [typeOrmFeature],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [typeOrmFeature, UsersService],
})
export class UsersModule {}
