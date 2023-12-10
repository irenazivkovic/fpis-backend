import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { ArtikalDto } from '../dto/artikal.dto';

export class ArtikalEntityToDtoMapper extends BaseDtoMapper<any, ArtikalDto> {
  toDto(entity: any): ArtikalDto {
    const { sifra_artikla, naziv_artikla, naziv_jm } = entity;

    return {
      sifraArtikla: sifra_artikla,
      nazivArtikla: naziv_artikla,
      jedinicaMere: naziv_jm,
    };
  }
}
