import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

const typeormForRoot = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) =>
    configService.get('database'),
});

@Module({
  imports: [ConfigModule, typeormForRoot],
  exports: [typeormForRoot],
})
export class DatabaseModule {}
