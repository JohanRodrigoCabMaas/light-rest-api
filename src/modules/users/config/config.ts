import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { User } from '../entities/user.entity';

export const userPaginationConfig: PaginateConfig<User> = {
  sortableColumns: ['username', 'email', 'fullName'],
  defaultSortBy: [['username', 'ASC']],
  searchableColumns: ['username', 'email', 'fullName'],
  select: ['username', 'email', 'fullName'],
  filterableColumns: {
    username: [FilterOperator.EQ, FilterSuffix.NOT],
    fullName: [FilterOperator.EQ, FilterSuffix.NOT],
    email: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
