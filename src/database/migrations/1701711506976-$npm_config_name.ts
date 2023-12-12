import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1701711506976 implements MigrationInterface {
    name = ' $npmConfigName1701711506976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`address\` varchar(255) NULL, \`city\` varchar(255) NULL, \`state\` varchar(255) NULL, \`postalCode\` varchar(255) NULL, \`country\` varchar(255) NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_8536b8b85c06969f84f0c098b0\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`productName\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`amount\` int NOT NULL, \`price\` int NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`imagePath\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tables\` (\`id\` int NOT NULL AUTO_INCREMENT, \`size\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`color\` varchar(255) NOT NULL, \`numberOfChairs\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`identifierNumber\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`total\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`weeklyOrderCount\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dashboard\` (\`id\` int NOT NULL AUTO_INCREMENT, \`totalSum\` int NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuariosAnonimos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`usuarioname\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`usuariosAnonimos\``);
        await queryRunner.query(`DROP TABLE \`dashboard\``);
        await queryRunner.query(`DROP TABLE \`orders\``);
        await queryRunner.query(`DROP TABLE \`tables\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP INDEX \`IDX_8536b8b85c06969f84f0c098b0\` ON \`customers\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
    }

}
