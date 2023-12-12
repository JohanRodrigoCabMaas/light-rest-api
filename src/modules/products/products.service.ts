import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { productPaginationConfig } from './config/configProducts';
import { ProductRepository } from './producto.repository';
import { unlink } from 'fs/promises';
import { Express } from 'express';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: ProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto, image: Express.Multer.File) {
    const productCreated = this.productRepository.create(createProductDto);
    if (image) {
      productCreated.imagePath = image.path;
    }
    return this.productRepository.save(productCreated);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
    image: Express.Multer.File,
  ) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      return null;
    }

    if (image) {
      if (product.imagePath) {
        await unlink(product.imagePath);
      }
      product.imagePath = image.path;
    }

    return this.productRepository.save({ ...product, ...updateProductDto });
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

  async delete(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (product.imagePath) {
      await unlink(product.imagePath);
    }
    return this.productRepository.save({ ...product, isActive: false });
  }
}
