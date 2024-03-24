import { Module } from '@nestjs/common';
import { EnviosModule } from './envios/envios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EnviosModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
