import { EntityRepository, Repository } from 'typeorm';
import { Dashboard } from './entities/dashboard.entity';

@EntityRepository(Dashboard)
export class DashboardRepository extends Repository<Dashboard> {}
