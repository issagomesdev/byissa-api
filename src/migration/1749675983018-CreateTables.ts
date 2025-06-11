import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1749675983018 implements MigrationInterface {
    name = 'CreateTables1749675983018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`techs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`icon\` varchar(255) NULL, \`description\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`projects\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` mediumtext NOT NULL, \`content\` longtext CHARACTER SET "utf8mb4" COLLATE "utf8mb4_unicode_ci" NULL, \`imageUrl\` varchar(255) NULL, \`repositoryLink\` varchar(255) NULL, \`demoLink\` varchar(255) NULL, \`orderNumber\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`icon\` varchar(255) NULL, \`description\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`projects_categories\` (\`projectsId\` int NOT NULL, \`categoriesId\` int NOT NULL, INDEX \`IDX_8fa122442d4acd20ae220c31f9\` (\`projectsId\`), INDEX \`IDX_d6952f370dbd30a21a047defd2\` (\`categoriesId\`), PRIMARY KEY (\`projectsId\`, \`categoriesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`projects_techs\` (\`projectsId\` int NOT NULL, \`techsId\` int NOT NULL, INDEX \`IDX_cc084ee5fe5c9ca42424da33a0\` (\`projectsId\`), INDEX \`IDX_4ad7f7924ebc471524c415c6fd\` (\`techsId\`), PRIMARY KEY (\`projectsId\`, \`techsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`projects_categories\` ADD CONSTRAINT \`FK_8fa122442d4acd20ae220c31f9b\` FOREIGN KEY (\`projectsId\`) REFERENCES \`projects\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`projects_categories\` ADD CONSTRAINT \`FK_d6952f370dbd30a21a047defd25\` FOREIGN KEY (\`categoriesId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`projects_techs\` ADD CONSTRAINT \`FK_cc084ee5fe5c9ca42424da33a0c\` FOREIGN KEY (\`projectsId\`) REFERENCES \`projects\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`projects_techs\` ADD CONSTRAINT \`FK_4ad7f7924ebc471524c415c6fd4\` FOREIGN KEY (\`techsId\`) REFERENCES \`techs\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects_techs\` DROP FOREIGN KEY \`FK_4ad7f7924ebc471524c415c6fd4\``);
        await queryRunner.query(`ALTER TABLE \`projects_techs\` DROP FOREIGN KEY \`FK_cc084ee5fe5c9ca42424da33a0c\``);
        await queryRunner.query(`ALTER TABLE \`projects_categories\` DROP FOREIGN KEY \`FK_d6952f370dbd30a21a047defd25\``);
        await queryRunner.query(`ALTER TABLE \`projects_categories\` DROP FOREIGN KEY \`FK_8fa122442d4acd20ae220c31f9b\``);
        await queryRunner.query(`DROP INDEX \`IDX_4ad7f7924ebc471524c415c6fd\` ON \`projects_techs\``);
        await queryRunner.query(`DROP INDEX \`IDX_cc084ee5fe5c9ca42424da33a0\` ON \`projects_techs\``);
        await queryRunner.query(`DROP TABLE \`projects_techs\``);
        await queryRunner.query(`DROP INDEX \`IDX_d6952f370dbd30a21a047defd2\` ON \`projects_categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_8fa122442d4acd20ae220c31f9\` ON \`projects_categories\``);
        await queryRunner.query(`DROP TABLE \`projects_categories\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
        await queryRunner.query(`DROP TABLE \`projects\``);
        await queryRunner.query(`DROP TABLE \`techs\``);
    }

}
