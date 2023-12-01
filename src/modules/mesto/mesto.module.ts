import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MestoEntity } from './entity/mesto.entity';
import { MestoController } from './mesto.controller';
import { MestoService } from './mesto.service';
import { MestoRepository } from './mesto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MestoEntity])],
  controllers: [MestoController],
  providers: [MestoService, MestoRepository],
  exports: [],
})
export class MestoModule {}
