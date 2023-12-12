import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { TableRepository } from './table.repository';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { tablePaginationConfig } from './config/configTable';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: TableRepository,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createTableDto: CreateTableDto) {
    const tableCreated = this.tableRepository.create(createTableDto);
    return this.tableRepository.save(tableCreated);
  }

  async findAll(paginationQuery: PaginateQuery): Promise<Paginated<Table>> {
    return paginate(
      paginationQuery,
      this.tableRepository,
      tablePaginationConfig,
    );
  }

  async findOne(id: number) {
    return this.tableRepository.findOneBy({ id });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateTableDto: UpdateTableDto) {
    const table = await this.tableRepository.findOneBy({ id });
    return this.tableRepository.save({ ...table, ...updateTableDto });
  }

  async remove(id: number) {
    const table = await this.tableRepository.findOneBy({ id });
    return this.tableRepository.save({ ...table, isActive: false });
  }
}
