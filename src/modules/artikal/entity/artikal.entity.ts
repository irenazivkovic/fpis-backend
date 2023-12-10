import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`artikal`)
export class ArtikalEntity {
  @PrimaryColumn({ name: 'sifra_artikla' })
  sifraArtikla: number;

  @Column({ name: 'naziv_artikla' })
  nazivArtikla: number;

  @Column({ name: 'sifra_jm' })
  sifraJM: string;
}
