import { DataSource } from 'typeorm';
import * as config from './config.datasource-options';

export const connectionSource = new DataSource(config);
