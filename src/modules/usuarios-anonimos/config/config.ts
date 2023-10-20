import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { UsuarioAnonimo } from '../entities/usuarios-anonimos.entity';

export const usuarioAnonimoPaginationCOnfig: PaginateConfig<UsuarioAnonimo> = {
  sortableColumns: ['usuarioname'],
  defaultSortBy: [['usuarioname', 'ASC']],
  searchableColumns: ['usuarioname'],
  select: ['usuarioname'],
  filterableColumns: {
    usuarioname: [FilterOperator.EQ, FilterSuffix.NOT],
  },
};
