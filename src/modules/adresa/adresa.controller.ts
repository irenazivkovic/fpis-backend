import { Controller, Get, Param } from '@nestjs/common';
import { AdresaService } from './adresa.service';

@Controller('/adresa')
export class AdresaController {
  constructor(private readonly service: AdresaService) {}

  @Get('/:idMesto')
  public async getMesta(@Param('idMesto') idMesto: number) {
    return await this.service.find(idMesto);
  }
}
