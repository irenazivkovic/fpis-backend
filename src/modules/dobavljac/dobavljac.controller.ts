import { Body, Controller, Post, Res } from '@nestjs/common';
import { DobavljacDto } from './dto/dobavljac.dto';
import { DobavljacService } from './dobavljac.service';

@Controller('dobavljac')
export class DobavljacController {
  constructor(private readonly service: DobavljacService) {}

  @Post()
  public async inser(@Body() dobavljac: DobavljacDto, @Res() res) {
    try {
      await this.service.insert(dobavljac);

      res.json({ status: 200, message: 'Dobavljač je sačuvan' });
    } catch (e) {
      res.json({ status: e.status, message: e.message });
    }
  }
}
