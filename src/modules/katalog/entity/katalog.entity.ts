import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`katalog`)
export class KatalogEntity {
  @PrimaryColumn({ name: 'id_kataloga' })
  idKataloga: number;

  @Column({ name: 'datum' })
  datum: Date;
}
