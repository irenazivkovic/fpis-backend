import { Injectable } from '@nestjs/common';
import { MestoRepository } from './mesto.repository';
import { MestoEntity } from './entity/mesto.entity';

@Injectable()
export class MestoService {
  constructor(private readonly repository: MestoRepository) {}

  public findAll(): Promise<MestoEntity[]> {
    return this.repository.findAll();
  }
}
