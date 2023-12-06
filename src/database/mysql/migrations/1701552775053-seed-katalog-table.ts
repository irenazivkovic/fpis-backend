import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedKatalogTable1701552775053 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO katalog (datum) VALUES ('2015-06-12 13:45:00')`,
    );
    await queryRunner.query(
      `INSERT INTO katalog (datum) VALUES ('2012-10-20 15:00:00')`,
    );
    await queryRunner.query(
      `INSERT INTO katalog (datum) VALUES ('2020-03-14 11:25:30')`,
    );
    await queryRunner.query(
      `INSERT INTO katalog (datum) VALUES ('2015-02-20 16:30:00')`,
    );
    await queryRunner.query(
      `INSERT INTO katalog (datum) VALUES ('2021-01-01 10:25:00')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE katalog`);
  }
}
