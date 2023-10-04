import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { customerPaginationConfig } from './config/config';
@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: CustomerRepository,
  ) {}
  async getAll(paginationQuery: PaginateQuery): Promise<Paginated<Customer>> {
    return paginate(
      paginationQuery,
      this.customerRepository,
      customerPaginationConfig,
    );
  }
  async create(createCustomerDto: CreateCustomerDto): Promise<any> {
    const userCreated = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(userCreated);
  }
  async getById(id: number) {
    return this.customerRepository.findOneBy({ id });
  }
  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const user = await this.customerRepository.findOneBy({ id });
    return this.customerRepository.save({ ...user, ...updateCustomerDto });
  }
  async delete(id: number) {
    const user = await this.customerRepository.findOneBy({ id });
    return this.customerRepository.save({ ...user, isActive: false });
  }
}
