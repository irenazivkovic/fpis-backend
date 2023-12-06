import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateKatalogTable1701552534802 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS katalog ( \
            id_kataloga int NOT NULL AUTO_INCREMENT, \    
            datum datetime NOT NULL, \
            PRIMARY KEY (id_kataloga) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE katalog`);
  }
}
