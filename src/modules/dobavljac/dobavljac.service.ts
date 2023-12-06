import { Injectable } from '@nestjs/common';
import { DobavljacRepository } from './dobavljac.repository';
import { DobavljacDto } from './dto/dobavljac.dto';

@Injectable()
export class DobavljacService {
  constructor(private readonly repository: DobavljacRepository) {}

  public async insert(dobavljac: DobavljacDto) {
    return await this.repository.insert(dobavljac);
  }

  public async findAll() {
    return await this.repository.findAll();
  }

  public async findByNaziv(naziv: string) {
    return await this.repository.find(naziv);
  }

  public async findBySifra(sifra: number) {
    return await this.repository.findBySifra(sifra);
  }

  public async delete(sifra: number) {
    return await this.repository.delete(sifra);
  }

  public async update(dobavljac: DobavljacDto) {
    return await this.repository.update(dobavljac);
  }
}
