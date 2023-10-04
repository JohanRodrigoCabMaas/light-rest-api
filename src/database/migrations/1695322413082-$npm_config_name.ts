import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1695322413082 implements MigrationInterface {
  name = ' $npmConfigName1695322413082';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`customers\` (\`customer_id\` int NOT NULL AUTO_INCREMENT, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NULL, \`address\` varchar(255) NULL, \`city\` varchar(255) NULL, \`state\` varchar(255) NULL, \`postal_code\` varchar(255) NULL, \`country\` varchar(255) NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_8536b8b85c06969f84f0c098b0\` (\`email\`), PRIMARY KEY (\`customer_id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_8536b8b85c06969f84f0c098b0\` ON \`customers\``,
    );
    await queryRunner.query(`DROP TABLE \`customers\``);
  }
}
