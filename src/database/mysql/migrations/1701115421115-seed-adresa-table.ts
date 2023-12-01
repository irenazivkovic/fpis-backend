import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedAdresaTable1701115421115 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (1, 'Vojvode Milenka 25')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (1, 'Svetogorska 4/10')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (1, 'Dobračina 36')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (1, 'Senjanina Ive 7')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (1, 'Kralja Petra 73')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (2, 'Mitrovička 2')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (2, 'Bulevar despota Stefana 18/5')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (2, 'Bulevar oslobođenja 75')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (2, 'Kraljevića Marka 10')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (2, 'Temerinska 53')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (3, 'Dalmatinska 10')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (3, 'Kralja Milana IV 14')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (3, 'Zmaj Jovina 53')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (4, 'Hercegovačka 61-41')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (4, 'Raška 3 ')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (4, 'Kozaračka stara 130')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (5, 'Oblačića Rada 20')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (5, 'Nikole Pašića 3/1')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (5, 'Studenička 44')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (5, 'Jelene Glavaski 6')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (5, '9. brigada 23')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (6, 'Braće Veličković 2')`,
    );
    await queryRunner.query(
      `INSERT INTO adresa (id_mesto, naziv_adrese) VALUES (6, 'Save Vujanovića 12')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE adresa`);
  }
}
