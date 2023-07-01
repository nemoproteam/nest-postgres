import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1688199362404 implements MigrationInterface {
    name = 'Migration1688199362404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "notes" character varying(1000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "notes"`);
    }

}
