import { MigrationInterface, QueryRunner } from "typeorm";

export class app1665082229945 implements MigrationInterface {
    name = 'app1665082229945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" ADD "imageUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "imageUrl"`);
    }

}
