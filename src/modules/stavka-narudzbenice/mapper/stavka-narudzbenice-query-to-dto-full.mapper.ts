import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { StavkaNarudzbeniceFullDto } from '../dto/stavka-narudzbenice.dto';

export class StavkaNarudzbeniceQueryToDtoFullMapper extends BaseDtoMapper<
  any,
  StavkaNarudzbeniceFullDto
> {
  toDto(entity: any): StavkaNarudzbeniceFullDto {
    const {
      rb_narudzbenice,
      id_narudzbenice,
      kolicina,
      napomena,
      sifra_artikla,
      naziv_artikla,
      naziv_jm,
    } = entity;

    return {
      rbNarudzbenice: rb_narudzbenice,
      idNarudzbenice: id_narudzbenice,
      napomena: napomena,
      kolicina: kolicina,
      artikal: {
        sifraArtikla: sifra_artikla,
        nazivArtikla: naziv_artikla,
        jedinicaMere: naziv_jm,
      },
    };
  }
}
