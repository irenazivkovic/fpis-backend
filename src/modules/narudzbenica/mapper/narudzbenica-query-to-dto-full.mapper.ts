import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { NarudbenicaFullDto } from '../dto/narudzbenica-full.dto';

export class NarudzbenicaQueryToDtoFullMapper extends BaseDtoMapper<
  any,
  NarudbenicaFullDto
> {
  toDto(entity: any): NarudbenicaFullDto {
    const {
      id_narudzbenice,
      sektor,
      narudzbenica_datum,
      stanje,
      id_kataloga,
      katalog_datum,
      sifra_dobavljaca,
      naziv,
      id_adresa,
      id_zaposlenog,
      ime_zaposlenog,
      prezime_zaposlenog,
    } = entity;

    return {
      narudzbenicaID: id_narudzbenice,
      datum: narudzbenica_datum,
      sektor: sektor,
      stanje: stanje,
      dobavljac: {
        naziv: naziv,
        sifraDobavljaca: sifra_dobavljaca,
        idAdresa: id_adresa,
      },
      katalog: {
        idKataloga: id_kataloga,
        datum: katalog_datum,
      },
      zaposleni: {
        idZaposlenog: id_zaposlenog,
        imeZaposlenog: ime_zaposlenog,
        prezimeZaposlenog: prezime_zaposlenog,
      },
      stavke: [],
    };
  }
}
