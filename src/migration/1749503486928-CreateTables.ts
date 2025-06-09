import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1749503486928 implements MigrationInterface {
    name = 'CreateTables1749503486928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`icon\` varchar(255) NULL, \`description\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` mediumtext NOT NULL, \`content\` longtext NULL, \`imageUrl\` varchar(255) NULL, \`repositoryLink\` varchar(255) NULL, \`demoLink\` varchar(255) NULL, \`orderNumber\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tech\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`icon\` varchar(255) NULL, \`description\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_categories\` (\`projectId\` int NOT NULL, \`categoryId\` int NOT NULL, INDEX \`IDX_4b3ae99beef33e732fb6318500\` (\`projectId\`), INDEX \`IDX_1c3ef809362ea005697d86e828\` (\`categoryId\`), PRIMARY KEY (\`projectId\`, \`categoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_techs\` (\`projectId\` int NOT NULL, \`techId\` int NOT NULL, INDEX \`IDX_2c0c23220ffaf9389d9002936b\` (\`projectId\`), INDEX \`IDX_7f09c29ce8c329d6e96c8a0168\` (\`techId\`), PRIMARY KEY (\`projectId\`, \`techId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`project_categories\` ADD CONSTRAINT \`FK_4b3ae99beef33e732fb63185009\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`project_categories\` ADD CONSTRAINT \`FK_1c3ef809362ea005697d86e8288\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_techs\` ADD CONSTRAINT \`FK_2c0c23220ffaf9389d9002936bc\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`project_techs\` ADD CONSTRAINT \`FK_7f09c29ce8c329d6e96c8a0168b\` FOREIGN KEY (\`techId\`) REFERENCES \`tech\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project_techs\` DROP FOREIGN KEY \`FK_7f09c29ce8c329d6e96c8a0168b\``);
        await queryRunner.query(`ALTER TABLE \`project_techs\` DROP FOREIGN KEY \`FK_2c0c23220ffaf9389d9002936bc\``);
        await queryRunner.query(`ALTER TABLE \`project_categories\` DROP FOREIGN KEY \`FK_1c3ef809362ea005697d86e8288\``);
        await queryRunner.query(`ALTER TABLE \`project_categories\` DROP FOREIGN KEY \`FK_4b3ae99beef33e732fb63185009\``);
        await queryRunner.query(`DROP INDEX \`IDX_7f09c29ce8c329d6e96c8a0168\` ON \`project_techs\``);
        await queryRunner.query(`DROP INDEX \`IDX_2c0c23220ffaf9389d9002936b\` ON \`project_techs\``);
        await queryRunner.query(`DROP TABLE \`project_techs\``);
        await queryRunner.query(`DROP INDEX \`IDX_1c3ef809362ea005697d86e828\` ON \`project_categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_4b3ae99beef33e732fb6318500\` ON \`project_categories\``);
        await queryRunner.query(`DROP TABLE \`project_categories\``);
        await queryRunner.query(`DROP TABLE \`tech\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
