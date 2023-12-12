import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1702312387680 implements MigrationInterface {
    name = ' $npmConfigName1702312387680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders\` DROP COLUMN \`identifierNumber\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders\` ADD \`identifierNumber\` varchar(255) NOT NULL`);
    }

}
