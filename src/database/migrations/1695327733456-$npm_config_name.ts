import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1695327733456 implements MigrationInterface {
  name = ' $npmConfigName1695327733456';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`customers\` CHANGE \`customer_id\` \`customer_id\` int NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`customers\` DROP PRIMARY KEY`);
    await queryRunner.query(
      `ALTER TABLE \`customers\` DROP COLUMN \`customer_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` DROP COLUMN \`last_name\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` DROP COLUMN \`postal_code\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` DROP COLUMN \`created_at\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD \`lastName\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD \`postalCode\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` CHANGE \`phone_number\` \`phone_number\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`customers\` CHANGE \`phone_number\` \`phone_number\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` DROP COLUMN \`createdAt\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` DROP COLUMN \`postalCode\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` DROP COLUMN \`lastName\``,
    );
    await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`id\``);
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD \`postal_code\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD \`last_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD \`customer_id\` int NOT NULL AUTO_INCREMENT`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` ADD PRIMARY KEY (\`customer_id\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customers\` CHANGE \`customer_id\` \`customer_id\` int NOT NULL AUTO_INCREMENT`,
    );
  }
}
