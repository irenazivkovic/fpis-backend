import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZaposlenEntity } from './entity/zaposlen.entity';
import { ZaposlenService } from './zaposlen.service';
import { ZaposlenRepository } from './zaposlen.repository';
import { ZaposlenController } from './zaposlen.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ZaposlenEntity])],
  controllers: [ZaposlenController],
  providers: [ZaposlenService, ZaposlenRepository],
  exports: [],
})
export class ZaposlenModule {}
