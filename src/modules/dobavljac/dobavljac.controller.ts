import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { DobavljacDto } from './dto/dobavljac.dto';
import { DobavljacService } from './dobavljac.service';
import { async } from 'rxjs';

@Controller('/dobavljac')
export class DobavljacController {
  constructor(private readonly service: DobavljacService) {}

  @Post()
  public async insert(@Body() dobavljac: DobavljacDto, @Res() res) {
    try {
      await this.service.insert(dobavljac);

      res.json({ status: 200, message: 'Dobavljač je sačuvan' });
    } catch (error) {
      res.json({ status: error.status, message: error.message });
    }
  }

  @Get()
  public async findAll() {
    return await this.service.findAll();
  }

  @Get('sifra/:sifra')
  public async findBySifra(@Param('sifra') sifra: number) {
    return await this.service.findBySifra(sifra);
  }

  @Get('naziv/:naziv')
  public async findByNaziv(@Param('naziv') naziv: string) {
    return await this.service.findByNaziv(naziv);
  }

  @Delete('/:sifra')
  public async delete(@Param('sifra') sifra: number, @Res() res) {
    try {
      await this.service.delete(sifra);

      res.json({ status: 200, message: 'Dobavljač je obrisan' });
    } catch (error) {
      res.json({ status: error.status, message: error.message });
    }
  }

  @Put()
  public async update(@Body() dobavljac: DobavljacDto, @Res() res) {
    try {
      await this.service.update(dobavljac);

      res.json({ status: 200, message: 'Dobavljač je izmenjen' });
    } catch (error) {
      res.json({ status: error.status, message: error.message });
    }
  }
}
