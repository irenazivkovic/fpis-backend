import { Injectable } from '@nestjs/common';
import { AdresaRepository } from './adresa.repository';
import { AdresaEntity } from './entity/adresa.entity';

@Injectable()
export class AdresaService {
  constructor(private readonly repository: AdresaRepository) {}

  public find(idMesto: number): Promise<AdresaEntity[]> {
    return this.repository.find(idMesto);
  }
}
