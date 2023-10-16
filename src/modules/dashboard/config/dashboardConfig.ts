import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { Dashboard } from '../entities/dashboard.entity';

export const dashPaginationConfig: PaginateConfig<Dashboard> = {
  sortableColumns: ['dateName', 'total'],
  defaultSortBy: [['dateName', 'ASC']],
  searchableColumns: ['dateName', 'total'],
  select: ['dateName', 'total'],
  filterableColumns: {
    dateName: [FilterOperator.EQ, FilterSuffix.NOT],
    total: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
