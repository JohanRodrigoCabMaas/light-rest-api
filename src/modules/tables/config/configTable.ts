import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { Table } from '../entities/table.entity';

export const tablePaginationConfig: PaginateConfig<Table> = {
  sortableColumns: ['size', 'type', 'numberOfChairs'],
  defaultSortBy: [['size', 'ASC']],
  searchableColumns: ['size', 'type', 'numberOfChairs'],
  select: ['size', 'type', 'numberOfChairs'],
  filterableColumns: {
    size: [FilterOperator.EQ, FilterSuffix.NOT],
    type: [FilterOperator.EQ, FilterSuffix.NOT],
    numberOfChairs: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
