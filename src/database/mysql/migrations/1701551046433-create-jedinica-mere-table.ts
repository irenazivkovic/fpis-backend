import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateJedinicaMereTable1701551046433
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS jedinica_mere ( \
            sifra_jm int NOT NULL AUTO_INCREMENT, \    
            naziv_jm VARCHAR(256) NOT NULL, \
            PRIMARY KEY (sifra_jm) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE jedinica_mere`);
  }
}
