import { DobavljacEntity } from 'src/modules/dobavljac/entity/dobavljac.entity';
import { KatalogEntity } from 'src/modules/katalog/entity/katalog.entity';
import { StavkaNarudzbeniceFullDto } from 'src/modules/stavka-narudzbenice/dto/stavka-narudzbenice.dto';
import { ZaposlenEntity } from 'src/modules/zaposlen/entity/zaposlen.entity';

export interface NarudbenicaFullDto {
  narudzbenicaID: number;
  sektor: string;
  datum: Date;
  katalog: KatalogEntity;
  dobavljac: DobavljacEntity;
  zaposleni: ZaposlenEntity;
  stanje: string;
  stavke: StavkaNarudzbeniceFullDto[];
}
