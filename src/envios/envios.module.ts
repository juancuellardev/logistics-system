import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';

@Module({
  controllers: [EnviosController],
  providers: [EnviosService],
})
export class EnviosModule {}
