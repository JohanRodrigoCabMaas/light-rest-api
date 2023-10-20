import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1697577591356 implements MigrationInterface {
    name = ' $npmConfigName1697577591356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuariosAnonimos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`usuarioname\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`usuariosAnonimos\``);
    }

}
