import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDobavljacTable1701448077177 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO dobavljac (sifra_dobavljaca, naziv, id_adresa) VALUES (1, 'Makro Dostava d.o.o.', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO dobavljac (sifra_dobavljaca, naziv, id_adresa) VALUES (2, 'Niš Ekspress', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO dobavljac (sifra_dobavljaca, naziv, id_adresa) VALUES (3, 'Danubius špedicija', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO dobavljac (sifra_dobavljaca, naziv, id_adresa) VALUES (4, 'Singidunum cargo d.o.o.', 3)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE dobavljac`);
  }
}
