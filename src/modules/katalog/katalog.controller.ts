import { Controller, Get } from '@nestjs/common';
import { KatalogService } from './katalog.service';

@Controller('/katalog')
export class KatalogController {
  constructor(private readonly service: KatalogService) {}

  @Get()
  public async findAll() {
    return this.service.findAll();
  }
}
