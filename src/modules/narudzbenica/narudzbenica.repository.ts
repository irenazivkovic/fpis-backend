import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NarudzbenicaEntity } from './entity/narudzbenica.entity';
import { NarudbenicaFullDto } from './dto/narudzbenica-full.dto';
import { NarudzbenicaQueryToDtoFullMapper } from './mapper/narudzbenica-query-to-dto-full.mapper';

@Injectable()
export class NarudzbenicaRepository {
  constructor(
    @InjectRepository(NarudzbenicaEntity)
    private readonly repository: Repository<NarudzbenicaEntity>,
    private readonly fullQueryMapper: NarudzbenicaQueryToDtoFullMapper,
  ) {}

  public mapToEntity(narudzbenica: NarudbenicaFullDto): NarudzbenicaEntity {
    return {
      idNarudzbenica: narudzbenica.narudzbenicaID,
      sifraDobavljaca: narudzbenica.dobavljac.sifraDobavljaca,
      idZaposlenog: narudzbenica.zaposleni.idZaposlenog,
      idKataloga: narudzbenica.katalog.idKataloga,
      sektor: narudzbenica.sektor,
      datum: narudzbenica.datum,
      stanje: narudzbenica.stanje,
    };
  }

  public async findAllComplete() {
    const result = await this.repository.query(`SELECT \
                n.id_narudzbenice, \
                n.sektor, \
                n.datum as narudzbenica_datum, \
                n.stanje, \
                n.id_kataloga, \
                k.datum as katalog_datum, \
                n.sifra_dobavljaca, \
                d.naziv, \
                d.id_adresa, \
                n.id_zaposlenog, \
                z.ime_zaposlenog, \
                z.prezime_zaposlenog \
              FROM fpis.narudzbenica n \
              JOIN fpis.katalog k \
              ON n.id_kataloga = k.id_kataloga \
              JOIN fpis.dobavljac d \
              ON n.sifra_dobavljaca = d.sifra_dobavljaca \
              JOIN fpis.zaposlen z \
              ON n.id_zaposlenog = z.id_zaposlenog`);

    return this.fullQueryMapper.toDtos(result);
  }

  public async findByName(imeZaposlenog: string) {
    const result = await this.repository.query(`SELECT \
                n.id_narudzbenice, \
                n.sektor, \
                n.datum as narudzbenica_datum, \
                n.stanje, \
                n.id_kataloga, \
                k.datum as katalog_datum, \
                n.sifra_dobavljaca, \
                d.naziv, \
                d.id_adresa, \
                n.id_zaposlenog, \
                z.ime_zaposlenog, \
                z.prezime_zaposlenog \
              FROM fpis.narudzbenica n \
              JOIN fpis.katalog k \
              ON n.id_kataloga = k.id_kataloga \
              JOIN fpis.dobavljac d \
              ON n.sifra_dobavljaca = d.sifra_dobavljaca \
              JOIN fpis.zaposlen z \
              ON n.id_zaposlenog = z.id_zaposlenog \
              WHERE CONCAT(z.ime_zaposlenog, ' ' , z.prezime_zaposlenog) LIKE '%${imeZaposlenog}%'`);

    return this.fullQueryMapper.toDtos(result);
  }

  public async findByID(id: number) {
    const result = await this.repository.query(`SELECT \
                n.id_narudzbenice, \
                n.sektor, \
                n.datum as narudzbenica_datum, \
                n.stanje, \
                n.id_kataloga, \
                k.datum as katalog_datum, \
                n.sifra_dobavljaca, \
                d.naziv, \
                d.id_adresa, \
                n.id_zaposlenog, \
                z.ime_zaposlenog, \
                z.prezime_zaposlenog \
              FROM fpis.narudzbenica n \
              JOIN fpis.katalog k \
              ON n.id_kataloga = k.id_kataloga \
              JOIN fpis.dobavljac d \
              ON n.sifra_dobavljaca = d.sifra_dobavljaca \
              JOIN fpis.zaposlen z \
              ON n.id_zaposlenog = z.id_zaposlenog \
              WHERE n.id_narudzbenice = ${id}`);

    return this.fullQueryMapper.toDtos(result);
  }
}
