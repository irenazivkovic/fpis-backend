import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DobavljacEntity } from './entity/dobavljac.entity';
import { DobavljacService } from './dobavljac.service';
import { DobavljacRepository } from './dobavljac.repository';
import { DobavljacController } from './dobavljac.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DobavljacEntity])],
  controllers: [DobavljacController],
  providers: [DobavljacService, DobavljacRepository],
  exports: [],
})
export class DobavljacModule {}
