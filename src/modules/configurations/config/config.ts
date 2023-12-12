import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { Configuration } from '../entities/configuration.entity';

export const configurationPaginationConfig: PaginateConfig<Configuration> = {
  sortableColumns: [
    'nameCompany',
    'description',
    'phoneNumber',
    'address',
    'city',
    'state',
    'postalCode',
    'country',
  ],
  defaultSortBy: [['nameCompany', 'ASC']],
  searchableColumns: [
    'nameCompany',
    'description',
    'phoneNumber',
    'address',
    'city',
    'state',
    'postalCode',
    'country',
  ],
  select: [
    'nameCompany',
    'description',
    'phoneNumber',
    'address',
    'city',
    'state',
    'postalCode',
    'country',
  ],
  filterableColumns: {
    nameCompany: [FilterOperator.EQ, FilterSuffix.NOT],
    phoneNumber: [FilterOperator.EQ, FilterSuffix.NOT],
    address: [FilterOperator.EQ, FilterSuffix.NOT],
    city: [FilterOperator.EQ, FilterSuffix.NOT],
    state: [FilterOperator.EQ, FilterSuffix.NOT],
    postalCode: [FilterOperator.EQ, FilterSuffix.NOT],
    country: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
