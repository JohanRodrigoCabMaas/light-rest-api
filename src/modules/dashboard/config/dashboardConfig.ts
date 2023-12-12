import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { Dashboard } from '../entities/dashboard.entity';

export const dashPaginationConfig: PaginateConfig<Dashboard> = {
  sortableColumns: ['totalSum'],
  defaultSortBy: [['totalSum', 'ASC']],
  searchableColumns: ['totalSum'],
  select: ['total'],
  filterableColumns: {
    dateName: [FilterOperator.EQ, FilterSuffix.NOT],
    total: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
