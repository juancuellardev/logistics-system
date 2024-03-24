import { Injectable } from '@nestjs/common';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { Envio } from './entities/envio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EnviosService {
  constructor(
    @InjectRepository(Envio)
    private readonly enviosRepository: Repository<Envio>,
  ) {}

  calcularTarifa(distancia: number): number {
    const tarifaBase = 5;
    const costoPorKilometro = 0.5;
    return tarifaBase + (distancia * costoPorKilometro);
  }
  
  create(createEnvioDto: CreateEnvioDto) {
    return this.enviosRepository.save(createEnvioDto);
  }

  findAll() {
    return this.enviosRepository.find();
  }
}
