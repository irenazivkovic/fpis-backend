import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ZaposlenEntity } from './entity/zaposlen.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ZaposlenRepository {
  constructor(
    @InjectRepository(ZaposlenEntity)
    private readonly repository: Repository<ZaposlenEntity>,
  ) {}

  public findAll(): Promise<ZaposlenEntity[]> {
    return this.repository.find();
  }
}
