import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './services/products/products.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    OrdersController,
    BrandsController,
    CustomerController,
    UsersController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
