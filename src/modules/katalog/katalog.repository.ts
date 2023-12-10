import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KatalogEntity } from './entity/katalog.entity';

@Injectable()
export class KatalogRepository {
  constructor(
    @InjectRepository(KatalogEntity)
    private readonly repository: Repository<KatalogEntity>,
  ) {}

  public findAll(): Promise<KatalogEntity[]> {
    return this.repository.find();
  }
}
