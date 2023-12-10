import { BadRequestException, Injectable } from '@nestjs/common';
import { NarudzbenicaRepository } from './narudzbenica.repository';
import { NarudbenicaFullDto } from './dto/narudzbenica-full.dto';
import { DataSource, QueryFailedError } from 'typeorm';
import { NarudzbenicaEntity } from './entity/narudzbenica.entity';
import { StavkaNarudzbeniceRepository } from '../stavka-narudzbenice/stavka-narudzbenice.repository';
import { StavkaNarudzbeniceEntity } from '../stavka-narudzbenice/entity/stavka-narudzbenice.entity';
import { QueryParametersDto } from './dto/query-parameters.dto';
import { chownSync } from 'fs';

@Injectable()
export class NarudzbenicaService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly narudzbenicaRepo: NarudzbenicaRepository,
    private readonly stavkeNarudzbeniceRepo: StavkaNarudzbeniceRepository,
  ) {}

  public async find(params: QueryParametersDto) {
    if (
      params.imeZaposlenog.length === 0 &&
      params.kreirana === false &&
      params.poslata === false &&
      params.potpisana === false
    ) {
      return await this.findAllComplete();
    } else if (params.imeZaposlenog.length === 0) {
      return await this.findAllByStatus(params);
    } else if (
      params.imeZaposlenog.length > 0 &&
      params.kreirana === false &&
      params.poslata === false &&
      params.potpisana === false
    ) {
      return await this.findAllByName(params.imeZaposlenog);
    } else {
      return await this.findAllByAll(params);
    }
  }

  public async findAllComplete(): Promise<NarudbenicaFullDto[]> {
    const narudzbenice: NarudbenicaFullDto[] =
      await this.narudzbenicaRepo.findAllComplete();

    for (const narudzbenica of narudzbenice) {
      const stavke = await this.stavkeNarudzbeniceRepo.find(
        narudzbenica.narudzbenicaID,
      );

      narudzbenica.stavke = stavke;
    }

    return narudzbenice;
  }

  public async findAllByName(
    imeZaposlenog: string,
  ): Promise<NarudbenicaFullDto[]> {
    const narudzbenice: NarudbenicaFullDto[] =
      await this.narudzbenicaRepo.findByName(imeZaposlenog);

    for (const narudzbenica of narudzbenice) {
      const stavke = await this.stavkeNarudzbeniceRepo.find(
        narudzbenica.narudzbenicaID,
      );

      narudzbenica.stavke = stavke;
    }

    return narudzbenice;
  }

  public async findAllByStatus(params: QueryParametersDto) {
    let result = await this.findAllComplete();
    let narudzbenice: NarudbenicaFullDto[] = [];

    if (params.kreirana) {
      const filter = result.filter(
        (narudzbenica) => narudzbenica.stanje === 'kreirana',
      );

      narudzbenice = narudzbenice.concat(filter);
    }

    if (params.poslata) {
      const filter = result.filter(
        (narudzbenica) => narudzbenica.stanje === 'poslata',
      );

      narudzbenice = narudzbenice.concat(filter);
    }

    if (params.potpisana) {
      const filter = result.filter(
        (narudzbenica) => narudzbenica.stanje === 'potpisana',
      );

      narudzbenice = narudzbenice.concat(filter);
    }

    return narudzbenice;
  }

  public async findAllByAll(params: QueryParametersDto) {
    const result: NarudbenicaFullDto[] = await this.narudzbenicaRepo.findByName(
      params.imeZaposlenog,
    );

    for (const narudzbenica of result) {
      const stavke = await this.stavkeNarudzbeniceRepo.find(
        narudzbenica.narudzbenicaID,
      );

      narudzbenica.stavke = stavke;
    }

    let narudzbenice: NarudbenicaFullDto[] = [];

    if (params.kreirana) {
      const filter = result.filter(
        (narudzbenica) => narudzbenica.stanje === 'kreirana',
      );

      narudzbenice = narudzbenice.concat(filter);
    }

    if (params.poslata) {
      const filter = result.filter(
        (narudzbenica) => narudzbenica.stanje === 'poslata',
      );

      narudzbenice = narudzbenice.concat(filter);
    }

    if (params.potpisana) {
      const filter = result.filter(
        (narudzbenica) => narudzbenica.stanje === 'potpisana',
      );

      narudzbenice = narudzbenice.concat(filter);
    }

    return narudzbenice;
  }

  public async findByID(id: number) {
    const narudzbenice: NarudbenicaFullDto[] =
      await this.narudzbenicaRepo.findByID(id);

    for (const narudzbenica of narudzbenice) {
      const stavke = await this.stavkeNarudzbeniceRepo.find(
        narudzbenica.narudzbenicaID,
      );

      narudzbenica.stavke = stavke;
    }

    return narudzbenice;
  }

  public async save(narudzbenica: NarudbenicaFullDto) {
    await this.dataSource.manager.transaction(async (manager) => {
      const narudzbenicaEntity =
        this.narudzbenicaRepo.mapToEntity(narudzbenica);

      if (
        await manager.exists(NarudzbenicaEntity, {
          where: { idNarudzbenica: narudzbenicaEntity.idNarudzbenica },
        })
      ) {
        throw new BadRequestException(
          'Već postoji narudžbenica sa datim ID-jem!',
        );
      }

      const narudzbenicaID = await manager.insert(
        NarudzbenicaEntity,
        narudzbenicaEntity,
      );

      const stavkeEntities = this.stavkeNarudzbeniceRepo.mapToEntity(
        narudzbenicaID.raw.insertId,
        narudzbenica.stavke,
      );

      try {
        await manager.save(StavkaNarudzbeniceEntity, stavkeEntities);
      } catch (error) {
        throw new BadRequestException(error);
      }
    });
  }

  public async delete(id: number) {
    try {
      await this.dataSource.transaction(async (manager) => {
        await manager.delete(StavkaNarudzbeniceEntity, { idNarudzbenice: id });
        await manager.delete(NarudzbenicaEntity, { idNarudzbenica: id });
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async update(narudzbenica: NarudbenicaFullDto) {
    try {
      await this.dataSource.transaction(async (manager) => {
        await manager.delete(StavkaNarudzbeniceEntity, {
          idNarudzbenice: narudzbenica.narudzbenicaID,
        });
        await manager.delete(NarudzbenicaEntity, {
          idNarudzbenica: narudzbenica.narudzbenicaID,
        });

        const narudzbenicaEntity =
          this.narudzbenicaRepo.mapToEntity(narudzbenica);

        if (
          await manager.exists(NarudzbenicaEntity, {
            where: { idNarudzbenica: narudzbenicaEntity.idNarudzbenica },
          })
        ) {
          throw new BadRequestException(
            'Već postoji narudžbenica sa datim ID-jem!',
          );
        }

        const narudzbenicaID = await manager.insert(
          NarudzbenicaEntity,
          narudzbenicaEntity,
        );

        const stavkeEntities = this.stavkeNarudzbeniceRepo.mapToEntity(
          narudzbenicaID.raw.insertId,
          narudzbenica.stavke,
        );

        await manager.save(StavkaNarudzbeniceEntity, stavkeEntities);
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
