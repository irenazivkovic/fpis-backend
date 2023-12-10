import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStavkaNarudzbeniceTable1702158123930
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS stavka_narudzbenice ( \
            rb_narudzbenice int NOT NULL AUTO_INCREMENT, \
            id_narudzbenice int NOT NULL, \    
            kolicina int NOT NULL, \
            napomena varchar(256) NOT NULL, \
            sifra_artikla int NOT NULL, \
            PRIMARY KEY (rb_narudzbenice, id_narudzbenice), \
            FOREIGN KEY (id_narudzbenice) REFERENCES narudzbenica(id_narudzbenice), \
            FOREIGN KEY (sifra_artikla) REFERENCES artikal(sifra_artikla) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE stavka_narudzbenice`);
  }
}
