import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedZaposlenTable1701448493703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO zaposlen (ime_zaposlenog, prezime_zaposlenog) VALUES ('Marko', 'Marković')`,
    );
    await queryRunner.query(
      `INSERT INTO zaposlen (ime_zaposlenog, prezime_zaposlenog) VALUES ('Petar', 'Žigić')`,
    );
    await queryRunner.query(
      `INSERT INTO zaposlen (ime_zaposlenog, prezime_zaposlenog) VALUES ('Bane', 'Trifunović')`,
    );
    await queryRunner.query(
      `INSERT INTO zaposlen (ime_zaposlenog, prezime_zaposlenog) VALUES ('Marija', 'Ćirić')`,
    );
    await queryRunner.query(
      `INSERT INTO zaposlen (ime_zaposlenog, prezime_zaposlenog) VALUES ('Sergej', 'Jezdić')`,
    );
    await queryRunner.query(
      `INSERT INTO zaposlen (ime_zaposlenog, prezime_zaposlenog) VALUES ('Lana', 'Ivković')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE zaposlen`);
  }
}
