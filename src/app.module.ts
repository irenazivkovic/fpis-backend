import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdresaModule } from './modules/adresa/adresa.module';
import { DobavljacModule } from './modules/dobavljac/dobavljac.module';
import { ZaposlenModule } from './modules/zaposlen/zaposlen.module';
import { KatalogModule } from './modules/katalog/katalog.module';
import { MestoModule } from './modules/mesto/mesto.module';
import { ArtikalModule } from './modules/artikal/artikal.module';
import { NarudzbenicaModule } from './modules/narudzbenica/narudzbenica.module';
import { StavkaNarudzbeniceModule } from './modules/stavka-narudzbenice/stavka-narudzbenice.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      autoLoadEntities: true,
    }),
    MestoModule,
    AdresaModule,
    DobavljacModule,
    ZaposlenModule,
    KatalogModule,
    ArtikalModule,
    NarudzbenicaModule,
    StavkaNarudzbeniceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
