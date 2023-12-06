import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedStavkaKatalogaTable1701553731521
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        5, \
        20, \
        3 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        5, \
        10, \
        2 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        5, \
        5, \
        1 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        2, \
        100, \
        5 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        2, \
        100, \
        6 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        2, \
        100, \
        7 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        2, \
        30, \
        8 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        2, \
        30, \
        9 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        2, \
        30, \
        10 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        2, \
        30, \
        11 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        3, \
        100, \
        19 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        3, \
        100, \
        20 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        3, \
        100, \
        21 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        3, \
        150, \
        22 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        3, \
        150, \
        23 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        1, \
        100, \
        12 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        1, \
        100, \
        13 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        1, \
        100, \
        14 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        1, \
        100, \
        15 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        1, \
        100, \
        16 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        1, \
        100, \
        17 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        1, \
        200, \
        18 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        2, \
        50, \
        4 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        4, \
        200, \
        24 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        4, \
        200, \
        25 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        4, \
        150, \
        26 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        4, \
        150, \
        27 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        4, \
        200, \
        28 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        4, \
        100, \
        29 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        4, \
        60, \
        30 )`,
    );
    await queryRunner.query(
      `INSERT INTO stavka_kataloga ( \
        id_kataloga,\
        kolicina, \ 
        sifra_artikla \
        ) VALUES ( \
        4, \
        50, \
        31 )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE stavka_kataloga`);
  }
}
