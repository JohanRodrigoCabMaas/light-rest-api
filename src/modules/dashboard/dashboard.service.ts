import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dashboard } from './entities/dashboard.entity';
import { DashboardRepository } from './dashboard.repository';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { dashPaginationConfig } from './config/dashboardConfig';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Dashboard)
    private readonly dashboardRepository: DashboardRepository,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createDashboardDto: CreateDashboardDto) {
    const dashCreated = this.dashboardRepository.create(createDashboardDto);
    return this.dashboardRepository.save(dashCreated);
  }

  findAll(paginationQuery: PaginateQuery): Promise<Paginated<Dashboard>> {
    return paginate(
      paginationQuery,
      this.dashboardRepository,
      dashPaginationConfig,
    );
  }

  findOne(id: number) {
    return this.dashboardRepository.findOneBy({ id });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateDashboardDto: UpdateDashboardDto) {
    const dash = await this.dashboardRepository.findOneBy({ id });
    return this.dashboardRepository.save({ ...dash, ...updateDashboardDto });
  }

  async remove(id: number) {
    const dash = await this.dashboardRepository.findOneBy({ id });
    return this.dashboardRepository.save({ ...dash, isActive: false });
  }
}
