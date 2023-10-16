import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1697221270184 implements MigrationInterface {
    name = ' $npmConfigName1697221270184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`orders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`identifierNumber\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`total\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dashboard\` (\`id\` int NOT NULL AUTO_INCREMENT, \`dateName\` varchar(255) NOT NULL, \`total\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`dashboard\``);
        await queryRunner.query(`DROP TABLE \`orders\``);
    }

}
