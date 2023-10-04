import { Injectable } from '@nestjs/common';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';

@Injectable()
export class ConfigurationsService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createConfigurationDto: CreateConfigurationDto) {
    return 'This action adds a new configuration';
  }

  findAll() {
    return `This action returns all configurations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configuration`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateConfigurationDto: UpdateConfigurationDto) {
    return `This action updates a #${id} configuration`;
  }

  remove(id: number) {
    return `This action removes a #${id} configuration`;
  }
}
