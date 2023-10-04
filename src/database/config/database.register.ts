import { registerAs } from '@nestjs/config';
import * as config from './config.datasource-options';

export default registerAs('database', () => config);
