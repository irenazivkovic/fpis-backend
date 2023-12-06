import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DobavljacEntity } from './entity/dobavljac.entity';
import { DobavljacService } from './dobavljac.service';
import { DobavljacRepository } from './dobavljac.repository';
import { DobavljacController } from './dobavljac.controller';
import { DobavljacEntityToDtoFullMapper } from './mapper/dobavljac-entity-to-dto-full.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([DobavljacEntity])],
  controllers: [DobavljacController],
  providers: [
    DobavljacService,
    DobavljacRepository,
    DobavljacEntityToDtoFullMapper,
  ],
  exports: [],
})
export class DobavljacModule {}
