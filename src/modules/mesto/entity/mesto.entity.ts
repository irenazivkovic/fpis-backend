import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`mesto`)
export class MestoEntity {
  @PrimaryColumn({ name: 'id_mesto' })
  idMesto: number;

  @Column({ name: 'naziv_mesta' })
  nazivMesta: string;
}
