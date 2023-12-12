import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { Order } from '../entities/order.entity';

export const orderPaginationConfig: PaginateConfig<Order> = {
  sortableColumns: ['total', 'weeklyOrderCount'],
  defaultSortBy: [['weeklyOrderCount', 'ASC']],
  searchableColumns: ['total', 'createdAt'],
  select: ['total', 'createdAt'],
  filterableColumns: {
    total: [FilterOperator.EQ, FilterSuffix.NOT],
    createdAt: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
