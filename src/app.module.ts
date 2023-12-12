import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from '@api-modules/dashboard/dashboard.module';
import { CustomersModule } from '@api-modules/customers/customers.module';
import { TablesModule } from '@api-modules/tables/tables.module';
import { ProductsModule } from '@api-modules/products/products.module';
import { OrdersModule } from '@api-modules/orders/orders.module';
import { ConfigurationsModule } from '@api-modules/configurations/configurations.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@api-modules/auth/auth.module';
import { DatabaseModule } from '@api-database/database.module';
import { UsersModule } from './modules/users/users.module';
import { UsuariosAnonimosModule } from './modules/usuarios-anonimos/usuarios-anonimos.module';
import baseConfig from '@api-core/config/configuration';
import databaseConfig from '@api-database/config/database.register';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [baseConfig, databaseConfig],
    }),
    DatabaseModule,
    DashboardModule,
    CustomersModule,
    TablesModule,
    ProductsModule,
    OrdersModule,
    ConfigurationsModule,
    AuthModule,
    UsersModule,
    UsuariosAnonimosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
