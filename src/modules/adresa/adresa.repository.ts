import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdresaEntity } from './entity/adresa.entity';

@Injectable()
export class AdresaRepository {
  constructor(
    @InjectRepository(AdresaEntity)
    private readonly repository: Repository<AdresaEntity>,
  ) {}

  public find(idMesto: number): Promise<AdresaEntity[]> {
    return this.repository.find({ where: { idMesto: idMesto } });
  }
}
