import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`stavka_narudzbenice`)
export class StavkaNarudzbeniceEntity {
  @PrimaryColumn({ name: 'rb_narudzbenice' })
  rbNarudzbenice: number;

  @PrimaryColumn({ name: 'id_narudzbenice' })
  idNarudzbenice: number;

  @Column({ name: 'kolicina' })
  kolicina: number;

  @Column({ name: 'napomena' })
  napomen: string;

  @Column({ name: 'sifra_artikla' })
  sifraArtikla: number;
}
