import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Envio } from './entities/envio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Envio])],
  controllers: [EnviosController],
  providers: [EnviosService],
})
export class EnviosModule {}
