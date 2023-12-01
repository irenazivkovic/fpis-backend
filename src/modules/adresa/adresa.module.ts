import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdresaEntity } from './entity/adresa.entity';
import { AdresaController } from './adresa.controller';
import { AdresaService } from './adresa.service';
import { AdresaRepository } from './adresa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AdresaEntity])],
  controllers: [AdresaController],
  providers: [AdresaService, AdresaRepository],
  exports: [],
})
export class AdresaModule {}
