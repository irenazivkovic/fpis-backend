import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KatalogEntity } from './entity/katalog.entity';
import { KatalogController } from './katalog.controller';
import { KatalogService } from './katalog.service';
import { KatalogRepository } from './katalog.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KatalogEntity])],
  controllers: [KatalogController],
  providers: [KatalogService, KatalogRepository],
  exports: [],
})
export class KatalogModule {}
