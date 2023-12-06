import { Controller, Get } from '@nestjs/common';
import { MestoService } from './mesto.service';

@Controller('/mesto')
export class MestoController {
  constructor(private readonly service: MestoService) {}

  @Get()
  public async getMesta() {
    return await this.service.findAll();
  }
}
