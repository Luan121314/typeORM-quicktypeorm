import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableLesson1608131883503 implements MigrationInterface {
    name = 'AlterTableLesson1608131883503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_0b349f6b8ca7f05eed39ffb956` ON `content`");
        await queryRunner.query("ALTER TABLE `content` DROP FOREIGN KEY `FK_0b349f6b8ca7f05eed39ffb956d`");
        await queryRunner.query("ALTER TABLE `content` CHANGE `lessonId` `lessonId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_f8129e3c7eacda851f01f054f96`");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `classeId` `classeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `content` ADD CONSTRAINT `FK_0b349f6b8ca7f05eed39ffb956d` FOREIGN KEY (`lessonId`) REFERENCES `lesson`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_f8129e3c7eacda851f01f054f96` FOREIGN KEY (`classeId`) REFERENCES `class`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_f8129e3c7eacda851f01f054f96`");
        await queryRunner.query("ALTER TABLE `content` DROP FOREIGN KEY `FK_0b349f6b8ca7f05eed39ffb956d`");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `classeId` `classeId` varchar(36) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_f8129e3c7eacda851f01f054f96` FOREIGN KEY (`classeId`) REFERENCES `class`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `content` CHANGE `lessonId` `lessonId` varchar(36) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `content` ADD CONSTRAINT `FK_0b349f6b8ca7f05eed39ffb956d` FOREIGN KEY (`lessonId`) REFERENCES `lesson`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_0b349f6b8ca7f05eed39ffb956` ON `content` (`lessonId`)");
    }

}
