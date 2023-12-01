import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDobavljacTable1701435053824 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS dobavljac ( \
            sifra_dobavljaca int NOT NULL, \    
            naziv VARCHAR(256) NOT NULL, \
            id_adresa int NOT NULL, \
            PRIMARY KEY (sifra_dobavljaca), \
            FOREIGN KEY (id_adresa) REFERENCES adresa(id_adresa) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE dobavljac`);
  }
}
