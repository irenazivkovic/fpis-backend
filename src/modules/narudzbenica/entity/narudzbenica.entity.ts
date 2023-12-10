import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`narudzbenica`)
export class NarudzbenicaEntity {
  @PrimaryColumn({ name: 'id_narudzbenice' })
  idNarudzbenica: number;

  @Column({ name: 'sektor' })
  sektor: string;

  @Column({ name: 'datum' })
  datum: Date;

  @Column({ name: 'stanje' })
  stanje: string;

  @Column({ name: 'id_kataloga' })
  idKataloga: number;

  @Column({ name: 'sifra_dobavljaca' })
  sifraDobavljaca: number;

  @Column({ name: 'id_zaposlenog' })
  idZaposlenog: number;
}
