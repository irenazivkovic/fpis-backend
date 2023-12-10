import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NarudzbenicaEntity } from './entity/narudzbenica.entity';
import { NarudzbenicaController } from './narudzbenica.controller';
import { NarudzbenicaService } from './narudzbenica.service';
import { NarudzbenicaRepository } from './narudzbenica.repository';
import { StavkaNarudzbeniceEntity } from '../stavka-narudzbenice/entity/stavka-narudzbenice.entity';
import { StavkaNarudzbeniceModule } from '../stavka-narudzbenice/stavka-narudzbenice.module';
import { NarudzbenicaQueryToDtoFullMapper } from './mapper/narudzbenica-query-to-dto-full.mapper';

@Module({
  imports: [
    TypeOrmModule.forFeature([NarudzbenicaEntity, StavkaNarudzbeniceEntity]),
    StavkaNarudzbeniceModule,
  ],
  controllers: [NarudzbenicaController],
  providers: [
    NarudzbenicaService,
    NarudzbenicaRepository,
    NarudzbenicaQueryToDtoFullMapper,
  ],
  exports: [],
})
export class NarudzbenicaModule {}
