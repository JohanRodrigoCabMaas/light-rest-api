import { Injectable } from '@nestjs/common';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { ConfigurationRepository } from './configurations.repository';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { Configuration } from './entities/configuration.entity';
import { configurationPaginationConfig } from './config/config';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConfigurationsService {
  constructor(
    @InjectRepository(Configuration)
    private readonly configurationRepository: ConfigurationRepository,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(createConfigurationDto: CreateConfigurationDto) {
    const infoCreate = this.configurationRepository.create(
      createConfigurationDto,
    );
    return this.configurationRepository.save(infoCreate);
  }

  async findAll(
    paginationQuery: PaginateQuery,
  ): Promise<Paginated<Configuration>> {
    return paginate(
      paginationQuery,
      this.configurationRepository,
      configurationPaginationConfig,
    );
  }

  async findOne(id: number) {
    return this.configurationRepository.findOneBy({ id });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateConfigurationDto: UpdateConfigurationDto) {
    const info = await this.configurationRepository.findOneBy({ id });
    return this.configurationRepository.save({
      ...info,
      ...updateConfigurationDto,
    });
  }

  async delete(id: number) {
    const info = await this.configurationRepository.findOneBy({ id });
    return this.configurationRepository.save({ ...info, isActive: false });
  }
}
