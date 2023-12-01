import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MestoEntity } from './entity/mesto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MestoRepository {
  constructor(
    @InjectRepository(MestoEntity)
    private readonly repository: Repository<MestoEntity>,
  ) {}

  public findAll(): Promise<MestoEntity[]> {
    return this.repository.find();
  }
}
