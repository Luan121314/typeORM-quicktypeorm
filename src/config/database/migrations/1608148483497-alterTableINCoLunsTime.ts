import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTableINCoLunsTime1608148483497 implements MigrationInterface {
    name = 'alterTableINCoLunsTime1608148483497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `content` DROP FOREIGN KEY `FK_0b349f6b8ca7f05eed39ffb956d`");
        await queryRunner.query("ALTER TABLE `content` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `content` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `content` CHANGE `lessonId` `lessonId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_f8129e3c7eacda851f01f054f96`");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `classeId` `classeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `class` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `class` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `student` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `student` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `content` ADD CONSTRAINT `FK_0b349f6b8ca7f05eed39ffb956d` FOREIGN KEY (`lessonId`) REFERENCES `lesson`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_f8129e3c7eacda851f01f054f96` FOREIGN KEY (`classeId`) REFERENCES `class`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_f8129e3c7eacda851f01f054f96`");
        await queryRunner.query("ALTER TABLE `content` DROP FOREIGN KEY `FK_0b349f6b8ca7f05eed39ffb956d`");
        await queryRunner.query("ALTER TABLE `student` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `student` CHANGE `created_at` `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `class` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `class` CHANGE `created_at` `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `classeId` `classeId` varchar(36) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `created_at` `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_f8129e3c7eacda851f01f054f96` FOREIGN KEY (`classeId`) REFERENCES `class`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `content` CHANGE `lessonId` `lessonId` varchar(36) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `content` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `content` CHANGE `created_at` `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `content` ADD CONSTRAINT `FK_0b349f6b8ca7f05eed39ffb956d` FOREIGN KEY (`lessonId`) REFERENCES `lesson`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
