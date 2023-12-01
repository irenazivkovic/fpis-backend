import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`adresa`)
export class AdresaEntity {
  @PrimaryColumn({ name: 'id_adresa' })
  idAdresa: number;

  @PrimaryColumn({ name: 'id_mesto' })
  idMesto: number;

  @Column({ name: 'naziv_adrese' })
  nazivAdrese: string;
}
