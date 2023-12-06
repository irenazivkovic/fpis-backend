import { BadRequestException, Injectable, Response } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { DobavljacEntity } from './entity/dobavljac.entity';
import { DobavljacDto } from './dto/dobavljac.dto';
import { DobavljacEntityToDtoFullMapper } from './mapper/dobavljac-entity-to-dto-full.mapper';

@Injectable()
export class DobavljacRepository {
  constructor(
    @InjectRepository(DobavljacEntity)
    private readonly repository: Repository<DobavljacEntity>,
    private readonly mapper: DobavljacEntityToDtoFullMapper,
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

  public async findAll() {
    const result = await this.repository
      .query(`SELECT d.sifra_dobavljaca, d.naziv, d.id_adresa, a.naziv_adrese, a.id_mesto, m.naziv_mesta \
              FROM fpis.dobavljac d \
              JOIN fpis.adresa a \
              ON d.id_adresa = a.id_adresa \
              JOIN fpis.mesto m \
              ON a.id_mesto = m.id_mesto`);

    return this.mapper.toDtos(result);
  }

  public async find(naziv: string) {
    const result = await this.repository
      .query(`SELECT d.sifra_dobavljaca, d.naziv, d.id_adresa, a.naziv_adrese, a.id_mesto, m.naziv_mesta \
              FROM fpis.dobavljac d \
              JOIN fpis.adresa a \
              ON d.id_adresa = a.id_adresa \
              JOIN fpis.mesto m \
              ON a.id_mesto = m.id_mesto \
              WHERE d.naziv LIKE '%${naziv}%'`);

    return this.mapper.toDtos(result);
  }

  public async findBySifra(sifra: number) {
    const result = await this.repository
      .query(`SELECT d.sifra_dobavljaca, d.naziv, d.id_adresa, a.naziv_adrese, a.id_mesto, m.naziv_mesta \
              FROM fpis.dobavljac d \
              JOIN fpis.adresa a \
              ON d.id_adresa = a.id_adresa \
              JOIN fpis.mesto m \
              ON a.id_mesto = m.id_mesto \
              WHERE d.sifra_dobavljaca = ${sifra}`);

    return this.mapper.toDto(result[0]);
  }

  public async delete(sifra: number) {
    try {
      this.repository.delete({ sifraDobavljaca: sifra });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async update(dobavljac: DobavljacDto) {
    try {
      this.repository.update(
        { sifraDobavljaca: dobavljac.sifraDobavljaca },
        dobavljac,
      );
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
