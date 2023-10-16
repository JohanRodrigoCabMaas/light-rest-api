import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1697146362183 implements MigrationInterface {
    name = ' $npmConfigName1697146362183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tables\` (\`id\` int NOT NULL AUTO_INCREMENT, \`size\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`numberOfChairs\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tables\``);
    }

}
