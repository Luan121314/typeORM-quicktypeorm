import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1608129607947 implements MigrationInterface {
    name = 'CreateTables1608129607947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `content` (`id` varchar(36) NOT NULL, `description` varchar(255) NOT NULL, `linkContent` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `lesson` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `student` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `key` int NOT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `student`");
        await queryRunner.query("DROP TABLE `lesson`");
        await queryRunner.query("DROP TABLE `content`");
    }

}
