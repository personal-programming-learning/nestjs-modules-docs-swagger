import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';

import { CustomersService } from './services/customer.service';
import { UsersService } from './services/user.service';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ ProductsModule ],
  controllers: [UsersController, CustomerController],
  providers: [CustomersService,UsersService],
})
export class UsersModule {}
