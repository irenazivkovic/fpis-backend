import { Injectable } from '@nestjs/common';
import { DobavljacRepository } from './dobavljac.repository';
import { DobavljacDto } from './dto/dobavljac.dto';

@Injectable()
export class DobavljacService {
  constructor(private readonly repository: DobavljacRepository) {}

  public async insert(dobavljac: DobavljacDto) {
    return await this.repository.insert(dobavljac);
  }
}
