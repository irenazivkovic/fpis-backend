import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArtikalTable1701551358783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS artikal ( \
            sifra_artikla int NOT NULL AUTO_INCREMENT, \    
            naziv_artikla VARCHAR(256) NOT NULL, \
            sifra_jm int NOT NULL, \
            PRIMARY KEY (sifra_artikla), \
            FOREIGN KEY (sifra_jm) REFERENCES jedinica_mere(sifra_jm) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE artikal`);
  }
}
