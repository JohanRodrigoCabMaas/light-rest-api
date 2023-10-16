import { User } from '@api-modules/users/entities/user.entity';
import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { Customer } from '@/modules/customers/entities/customer.entity';
import { Product } from '@/modules/products/entities/product.entity';
import { Table } from '@/modules/tables/entities/table.entity';
import { Order } from '@/modules/orders/entities/order.entity';
import { Dashboard } from '@/modules/dashboard/entities/dashboard.entity';

dotenv.config();

const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [User, Customer, Product, Table, Order, Dashboard],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/database/migrations/*{.ts,.js}'],
};

export = config;
