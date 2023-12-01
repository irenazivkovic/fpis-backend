import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedMestoTable1701115126264 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO mesto (naziv_mesta) VALUES ('Beograd')`,
    );
    await queryRunner.query(
      `INSERT INTO mesto (naziv_mesta) VALUES ('Novi Sad')`,
    );
    await queryRunner.query(
      `INSERT INTO mesto (naziv_mesta) VALUES ('Kragujevac')`,
    );
    await queryRunner.query(
      `INSERT INTO mesto (naziv_mesta) VALUES ('Pančevo')`,
    );
    await queryRunner.query(`INSERT INTO mesto (naziv_mesta) VALUES ('Niš')`);
    await queryRunner.query(
      `INSERT INTO mesto (naziv_mesta) VALUES ('Valjevo')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE mesto`);
  }
}
