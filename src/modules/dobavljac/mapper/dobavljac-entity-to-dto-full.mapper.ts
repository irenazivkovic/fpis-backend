import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { DobavljacFullDto } from '../dto/dobavljac-full.dto';

export class DobavljacEntityToDtoFullMapper extends BaseDtoMapper<
  any,
  DobavljacFullDto
> {
  toDto(entity: any): DobavljacFullDto {
    const {
      sifra_dobavljaca,
      naziv,
      id_adresa,
      naziv_adrese,
      id_mesto,
      naziv_mesta,
    } = entity;

    return {
      sifraDobavljaca: sifra_dobavljaca,
      naziv: naziv,
      adresa: {
        idAdresa: id_adresa,
        nazivAdresa: naziv_adrese,
        mesto: {
          idMesto: id_mesto,
          nazivMesta: naziv_mesta,
        },
      },
    };
  }
}
