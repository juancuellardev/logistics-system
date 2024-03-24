import { Module } from '@nestjs/common';
import { EnviosModule } from './envios/envios.module';

@Module({
  imports: [EnviosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
