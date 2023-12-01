import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMestoTable1701112205729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS mesto ( \
            id_mesto int NOT NULL AUTO_INCREMENT, \
            naziv_mesta VARCHAR(128) NOT NULL, \
            PRIMARY KEY (id_mesto) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE mesto`);
  }
}
