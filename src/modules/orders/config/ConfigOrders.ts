import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { Order } from '../entities/order.entity';

export const orderPaginationConfig: PaginateConfig<Order> = {
  sortableColumns: ['identifierNumber', 'total'],
  defaultSortBy: [['identifierNumber', 'ASC']],
  searchableColumns: ['identifierNumber', 'total'],
  select: ['identifierNumber', 'total'],
  filterableColumns: {
    identifierNumber: [FilterOperator.EQ, FilterSuffix.NOT],
    total: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
