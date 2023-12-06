import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStavkaKatalogaTable1701553281597
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS stavka_kataloga ( \
            rb_stavke int NOT NULL AUTO_INCREMENT, \ 
            id_kataloga int NOT NULL, \
            kolicina int NOT NULL, \
            sifra_artikla int NOT NULL, \
            PRIMARY KEY (rb_stavke, id_kataloga), \
            FOREIGN KEY (id_kataloga) REFERENCES katalog(id_kataloga), \
            FOREIGN KEY (sifra_artikla) REFERENCES artikal(sifra_artikla) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE stavka_kataloga`);
  }
}
