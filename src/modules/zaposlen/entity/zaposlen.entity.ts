import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`zaposlen`)
export class ZaposlenEntity {
  @PrimaryColumn({ name: 'id_zaposlenog' })
  idZaposlenog: number;

  @Column({ name: 'ime_zaposlenog' })
  imeZaposlenog: string;

  @Column({ name: 'prezime_zaposlenog' })
  prezimeZaposlenog: string;
}
