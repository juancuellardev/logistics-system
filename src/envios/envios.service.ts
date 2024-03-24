import { Injectable } from '@nestjs/common';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Injectable()
export class EnviosService {
  create(createEnvioDto: CreateEnvioDto) {
    return 'This action adds a new envio';
  }

  findAll() {
    return `This action returns all envios`;
  }
}
