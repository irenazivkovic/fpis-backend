import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedJedinicaMereTable1701551139865 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO jedinica_mere (naziv_jm) VALUES ('komad')`,
    );
    await queryRunner.query(
      `INSERT INTO jedinica_mere (naziv_jm) VALUES ('kilogram (kg)')`,
    );
    await queryRunner.query(
      `INSERT INTO jedinica_mere (naziv_jm) VALUES ('litar (l)')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE jedinica_mere`);
  }
}
