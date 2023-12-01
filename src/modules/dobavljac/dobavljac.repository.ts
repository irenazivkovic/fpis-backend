import { BadRequestException, Injectable, Response } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DobavljacEntity } from './entity/dobavljac.entity';
import { DobavljacDto } from './dto/dobavljac.dto';

@Injectable()
export class DobavljacRepository {
  constructor(
    @InjectRepository(DobavljacEntity)
    private readonly repository: Repository<DobavljacEntity>,
  ) {}

  public async insert(dobavljac: DobavljacDto) {
    if (
      await this.repository.exist({
        where: { sifraDobavljaca: dobavljac.sifraDobavljaca },
      })
    ) {
      throw new BadRequestException('Dobavljač sa datom šifrom već postoji!');
    }

    try {
      await this.repository.insert(dobavljac);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
