import { ArtikalDto } from 'src/modules/artikal/dto/artikal.dto';

export interface StavkaNarudzbeniceFullDto {
  idNarudzbenice: number;
  rbNarudzbenice: number;
  kolicina: number;
  napomena: string;
  artikal: ArtikalDto;
}
