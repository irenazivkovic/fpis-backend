import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdresaTable1701112366145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS adresa ( \
            id_adresa int NOT NULL AUTO_INCREMENT, \    
            id_mesto int NOT NULL, \
            naziv_adrese VARCHAR(256) NOT NULL, \
            PRIMARY KEY (id_adresa, id_mesto), \
            FOREIGN KEY (id_mesto) REFERENCES mesto(id_mesto) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE adresa`);
  }
}
