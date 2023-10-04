import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { Customer } from './entities/customer.entity';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  getAll(
    @Paginate() paginationQuery: PaginateQuery,
  ): Promise<Paginated<Customer>> {
    return this.customersService.getAll(paginationQuery);
  }

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.customersService.getById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCustomerDto) {
    return this.customersService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customersService.delete(+id);
  }
}
