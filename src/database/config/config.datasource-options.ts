import { User } from '@api-modules/users/entities/user.entity';
import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { Customer } from '@/modules/customers/entities/customer.entity';

dotenv.config();

const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [User, Customer],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/database/migrations/*{.ts,.js}'],
};

export = config;
