import { Injectable } from '@nestjs/common';
import { KatalogRepository } from './katalog.repository';

@Injectable()
export class KatalogService {
  constructor(private readonly repository: KatalogRepository) {}

  public findAll() {
    return this.repository.findAll();
  }
}
