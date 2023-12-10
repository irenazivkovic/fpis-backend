import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtikalEntity } from './entity/artikal.entity';
import { ArtikalEntityToDtoMapper } from './mapper/artikal-entity-to-dto.mapper';

@Injectable()
export class ArtikalRepository {
  constructor(
    @InjectRepository(ArtikalEntity)
    private readonly repository: Repository<ArtikalEntity>,
    private readonly mapper: ArtikalEntityToDtoMapper,
  ) {}

  public async find(katalogID: number) {
    const result = await this.repository
      .query(`SELECT a.sifra_artikla, a.naziv_artikla, jm.naziv_jm \
                FROM fpis.katalog k \
                JOIN fpis.stavka_kataloga sk \
                ON sk.id_kataloga = k.id_kataloga \
                JOIN fpis.artikal a \
                ON sk.sifra_artikla = a.sifra_artikla \
                JOIN fpis.jedinica_mere jm \
                ON a.sifra_jm = jm.sifra_jm \
                WHERE k.id_kataloga = ${katalogID}`);

    return this.mapper.toDtos(result);
  }
}
