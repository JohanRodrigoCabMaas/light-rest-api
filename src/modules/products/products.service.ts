import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { productPaginationConfig } from './config/configProducts';
import { ProductRepository } from './producto.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: ProductRepository,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(createProductDto: CreateProductDto) {
    const productCreated = this.productRepository.create(createProductDto);
    return this.productRepository.save(productCreated);
  }

  async findAll(paginationQuery: PaginateQuery): Promise<Paginated<Product>> {
    return paginate(
      paginationQuery,
      this.productRepository,
      productPaginationConfig,
    );
  }

  async findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOneBy({ id });
    return this.productRepository.save({ ...product, ...updateProductDto });
  }

  async delete(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    return this.productRepository.save({ ...product, isActive: false });
  }
}
