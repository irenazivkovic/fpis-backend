import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedArtikalTable1701551476677 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Krevet - Queen size', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Krevet - Single size', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Krevet - Double size', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Liker - Orahovača', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Vino - Merlot', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Vino - Chardonnay', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Vino - Rose', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Rakija - Šljiva', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Rakija - Loza', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Rakija - Dunja', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Rakija - Kruška', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Coca Cola', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Coca Cola - Zero', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Voćni sok - jabuka', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Voćni sok - zova', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Voćni sok - višnja', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Voćni sok - mix', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Mineralna voda', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Pileće meso - Grudi', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Pileće meso - Krilca', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Pileće meso - Batak', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Juneće meso - But', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Svinjsko meso - But', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Pirinač - Beli', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Pirinač - Braon', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Mleko - Sveže', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Mleko - Pasterizovano', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Jaja - Pileća', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Jaja - Guščja', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Zelena paprika - Baburda', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO artikal (naziv_artikla, sifra_jm) VALUES ('Crvena paprika - Baburda', 2)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE artikal`);
  }
}
