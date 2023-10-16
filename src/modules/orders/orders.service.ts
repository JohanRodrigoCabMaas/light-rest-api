import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderRepository } from './order.repository';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { orderPaginationConfig } from './config/ConfigOrders';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: OrderRepository,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createOrderDto: CreateOrderDto) {
    const orderCreated = this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(orderCreated);
  }

  findAll(paginateQuery: PaginateQuery): Promise<Paginated<Order>> {
    return paginate(paginateQuery, this.orderRepository, orderPaginationConfig);
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({ id });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.findOneBy({ id });
    return this.orderRepository.save({ ...order, ...updateOrderDto });
  }

  async remove(id: number) {
    const order = await this.orderRepository.findOneBy({ id });
    return this.orderRepository.save({ ...order, isActive: false });
  }
}
