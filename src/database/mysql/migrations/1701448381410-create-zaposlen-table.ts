import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateZaposlenTable1701448381410 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS zaposlen ( \
            id_zaposlenog int NOT NULL AUTO_INCREMENT, \    
            ime_zaposlenog VARCHAR(256) NOT NULL, \
            prezime_zaposlenog VARCHAR(256) NOT NULL, \
            PRIMARY KEY (id_zaposlenog) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE zaposlen`);
  }
}
