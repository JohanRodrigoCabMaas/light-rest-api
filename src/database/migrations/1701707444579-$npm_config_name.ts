import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1701707444579 implements MigrationInterface {
    name = ' $npmConfigName1701707444579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`configurations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nameCompany\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`address\` varchar(255) NULL, \`city\` varchar(255) NULL, \`state\` varchar(255) NULL, \`postalCode\` varchar(255) NULL, \`country\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`configurations\``);
    }

}
