import { Injectable } from '@nestjs/common';
import { ZaposlenEntity } from './entity/zaposlen.entity';
import { ZaposlenRepository } from './zaposlen.repository';

@Injectable()
export class ZaposlenService {
  constructor(private readonly repository: ZaposlenRepository) {}

  public findAll(): Promise<ZaposlenEntity[]> {
    return this.repository.findAll();
  }
}
