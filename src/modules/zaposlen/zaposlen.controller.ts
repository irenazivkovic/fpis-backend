import { Controller, Get } from '@nestjs/common';
import { ZaposlenService } from './zaposlen.service';

@Controller('/zaposlen')
export class ZaposlenController {
  constructor(private readonly service: ZaposlenService) {}

  @Get()
  public async getMesta() {
    return await this.service.findAll();
  }
}
