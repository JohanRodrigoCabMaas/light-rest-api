import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1695074919787 implements MigrationInterface {
  name = 'Init1695074919787';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`fullName\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`dateOfBirth\` datetime NULL, \`gender\` varchar(255) NULL, \`address\` varchar(255) NULL, \`phoneNumber\` varchar(255) NULL, \`role\` varchar(255) NOT NULL DEFAULT 'user', \`profileImageUrl\` varchar(255) NULL, \`bio\` text NULL, \`preferredLanguage\` varchar(255) NOT NULL DEFAULT 'en', \`accountBalance\` decimal(10,2) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
