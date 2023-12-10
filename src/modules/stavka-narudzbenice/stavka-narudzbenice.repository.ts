import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StavkaNarudzbeniceEntity } from './entity/stavka-narudzbenice.entity';
import { StavkaNarudzbeniceFullDto } from './dto/stavka-narudzbenice.dto';
import { StavkaNarudzbeniceQueryToDtoFullMapper } from './mapper/stavka-narudzbenice-query-to-dto-full.mapper';

@Injectable()
export class StavkaNarudzbeniceRepository {
  constructor(
    @InjectRepository(StavkaNarudzbeniceEntity)
    private readonly repository: Repository<StavkaNarudzbeniceEntity>,
    private readonly fullQueryMapper: StavkaNarudzbeniceQueryToDtoFullMapper,
  ) {}

  public mapToEntity(
    narudzbenicaID: number,
    stavke: StavkaNarudzbeniceFullDto[],
  ) {
    const stavkeEntities: StavkaNarudzbeniceEntity[] = stavke.map((stavka) => {
      return {
        idNarudzbenice: narudzbenicaID,
        kolicina: stavka.kolicina,
        napomen: stavka.napomena,
        sifraArtikla: stavka.artikal.sifraArtikla,
        rbNarudzbenice: stavka.rbNarudzbenice,
      };
    });

    return stavkeEntities;
  }

  public async find(narudzbenicaID: number) {
    const result = await this.repository.query(`SELECT \ 
                sn.rb_narudzbenice, \ 
                sn.id_narudzbenice, \
                sn.kolicina, \
                sn.napomena, \
                sn.sifra_artikla, \
                a.naziv_artikla, \
                jm.naziv_jm \
              FROM fpis.stavka_narudzbenice sn
              JOIN fpis.artikal a
              ON sn.sifra_artikla = a.sifra_artikla
              JOIN fpis.jedinica_mere jm
              ON a.sifra_jm = jm.sifra_jm
              WHERE sn.id_narudzbenice = ${narudzbenicaID}`);

    return this.fullQueryMapper.toDtos(result);
  }
}
