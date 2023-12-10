import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtikalEntity } from './entity/artikal.entity';
import { ArtikalController } from './artikal.controller';
import { ArtikalService } from './artikal.service';
import { ArtikalRepository } from './artikal.repository';
import { ArtikalEntityToDtoMapper } from './mapper/artikal-entity-to-dto.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([ArtikalEntity])],
  controllers: [ArtikalController],
  providers: [ArtikalService, ArtikalRepository, ArtikalEntityToDtoMapper],
  exports: [],
})
export class ArtikalModule {}
