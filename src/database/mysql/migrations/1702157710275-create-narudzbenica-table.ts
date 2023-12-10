import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateNarudzbenicaTable1702157710275
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS narudzbenica ( \
            id_narudzbenice int NOT NULL, \    
            sektor VARCHAR(256) NOT NULL, \
            datum datetime NOT NULL, \
            stanje varchar(25) DEFAULT 'kreirana', \
            id_kataloga int NOT NULL, \
            sifra_dobavljaca int NOT NULL, \
            id_zaposlenog int NOT NULL, \
            PRIMARY KEY (id_narudzbenice), \
            FOREIGN KEY (id_kataloga) REFERENCES katalog(id_kataloga), \
            FOREIGN KEY (sifra_dobavljaca) REFERENCES dobavljac(sifra_dobavljaca), \
            FOREIGN KEY (id_zaposlenog) REFERENCES zaposlen(id_zaposlenog) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE narudzbenica`);
  }
}
