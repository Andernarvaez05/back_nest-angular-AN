import { MigrationInterface, QueryRunner } from "typeorm";

export class QuitandonameTableUser1761329289324 implements MigrationInterface {
    name = 'QuitandonameTableUser1761329289324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
    }

}
