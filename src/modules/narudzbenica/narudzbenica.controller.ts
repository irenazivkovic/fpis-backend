import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { NarudzbenicaService } from './narudzbenica.service';
import { NarudbenicaFullDto } from './dto/narudzbenica-full.dto';
import { QueryParametersDto } from './dto/query-parameters.dto';

@Controller('/narudzbenica')
export class NarudzbenicaController {
  constructor(private readonly service: NarudzbenicaService) {}

  @Get('/:imeZaposlenog/:kreirana/:potpisana/:poslata')
  public async find(
    @Param('imeZaposlenog') imeZaposlenog: string,
    @Param('kreirana') kreirana: string,
    @Param('potpisana') potpisana: string,
    @Param('poslata') poslata: string,
  ) {
    const params: QueryParametersDto = {
      imeZaposlenog: imeZaposlenog.trimStart(),
      kreirana: kreirana === 'true',
      poslata: poslata === 'true',
      potpisana: potpisana === 'true',
    };

    return await this.service.find(params);
  }

  @Get('/id/:id')
  public async findByID(@Param('id') id: number) {
    return await this.service.findByID(id);
  }

  @Post()
  public async insert(@Body() narudzbenica: NarudbenicaFullDto, @Res() res) {
    try {
      await this.service.save(narudzbenica);
      res.json({ status: 200, message: 'Narudžbenica je sačuvana je sačuvan' });
    } catch (error) {
      res.json({ status: error.status, message: error.message });
    }
  }

  @Delete('/:id')
  public async delete(@Param('id') id: number, @Res() res) {
    try {
      await this.service.delete(id);

      res.json({ status: 200, message: 'Narudžbenica je obrisana' });
    } catch (error) {
      res.json({ status: error.status, message: error.message });
    }
  }
}
