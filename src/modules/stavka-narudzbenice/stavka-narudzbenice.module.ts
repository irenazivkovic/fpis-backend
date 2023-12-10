import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StavkaNarudzbeniceEntity } from './entity/stavka-narudzbenice.entity';
import { StavkaNarudzbeniceRepository } from './stavka-narudzbenice.repository';
import { StavkaNarudzbeniceQueryToDtoFullMapper } from './mapper/stavka-narudzbenice-query-to-dto-full.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([StavkaNarudzbeniceEntity])],
  controllers: [],
  providers: [
    StavkaNarudzbeniceRepository,
    StavkaNarudzbeniceQueryToDtoFullMapper,
  ],
  exports: [StavkaNarudzbeniceRepository],
})
export class StavkaNarudzbeniceModule {}
