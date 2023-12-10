import { Controller, Get, Param } from '@nestjs/common';
import { ArtikalService } from './artikal.service';

@Controller('/artikal')
export class ArtikalController {
  constructor(private readonly service: ArtikalService) {}

  @Get('/:katalogID')
  public async findAll(@Param('katalogID') katalogID: number) {
    return await this.service.find(katalogID);
  }
}
