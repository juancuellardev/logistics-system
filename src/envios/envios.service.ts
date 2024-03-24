import { Injectable } from '@nestjs/common';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { UpdateEnvioDto } from './dto/update-envio.dto';

@Injectable()
export class EnviosService {
  create(createEnvioDto: CreateEnvioDto) {
    return 'This action adds a new envio';
  }

  findAll() {
    return `This action returns all envios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} envio`;
  }

  update(id: number, updateEnvioDto: UpdateEnvioDto) {
    return `This action updates a #${id} envio`;
  }

  remove(id: number) {
    return `This action removes a #${id} envio`;
  }
}
