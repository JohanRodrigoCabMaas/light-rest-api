import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { Product } from '../entities/product.entity';

export const productPaginationConfig: PaginateConfig<Product> = {
  sortableColumns: [
    'productName',
    'description',
    'amount',
    'size',
    'price',
    'availability',
  ],
  defaultSortBy: [['productName', 'ASC']],
  searchableColumns: [
    'productName',
    'description',
    'amount',
    'size',
    'price',
    'availability',
  ],
  select: [
    'productName',
    'description',
    'amount',
    'size',
    'price',
    'availability',
  ],
  filterableColumns: {
    productName: [FilterOperator.EQ, FilterSuffix.NOT],
    description: [FilterOperator.EQ, FilterSuffix.NOT],
    amount: [FilterOperator.EQ, FilterSuffix.NOT],
    size: [FilterOperator.EQ, FilterSuffix.NOT],
    price: [FilterOperator.EQ, FilterSuffix.NOT],
    availability: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
