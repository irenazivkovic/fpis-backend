import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`dobavljac`)
export class DobavljacEntity {
  @PrimaryColumn({ name: 'sifra_dobavljaca' })
  sifraDobavljaca: number;

  @Column({ name: 'naziv' })
  naziv: string;

  @Column({ name: 'id_adresa' })
  idAdresa: number;
}
