import {MigrationInterface, QueryRunner} from "typeorm";

export default class RelationContentToLesson1608130502600 implements MigrationInterface {
    name = 'RelationCOntentToLesson1608130502600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `content` ADD `lessonId` int NULL");
        await queryRunner.query("ALTER TABLE `content` ADD UNIQUE INDEX `IDX_0b349f6b8ca7f05eed39ffb956` (`lessonId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_0b349f6b8ca7f05eed39ffb956` ON `content` (`lessonId`)");
        await queryRunner.query("ALTER TABLE `content` ADD CONSTRAINT `FK_0b349f6b8ca7f05eed39ffb956d` FOREIGN KEY (`lessonId`) REFERENCES `lesson`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `content` DROP FOREIGN KEY `FK_0b349f6b8ca7f05eed39ffb956d`");
        await queryRunner.query("DROP INDEX `REL_0b349f6b8ca7f05eed39ffb956` ON `content`");
        await queryRunner.query("ALTER TABLE `content` DROP INDEX `IDX_0b349f6b8ca7f05eed39ffb956`");
        await queryRunner.query("ALTER TABLE `content` DROP COLUMN `lessonId`");
    }

}
