import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1701717186023 implements MigrationInterface {
    name = ' $npmConfigName1701717186023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`configurations\` ADD \`description\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`configurations\` DROP COLUMN \`description\``);
    }

}
