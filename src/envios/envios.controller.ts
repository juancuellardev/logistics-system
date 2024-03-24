import { Controller, Get, Post, Body} from '@nestjs/common';
import { EnviosService } from './envios.service';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  create(@Body() createEnvioDto: CreateEnvioDto) {
    return this.enviosService.create(createEnvioDto);
  }

  @Get()
  findAll() {
    return this.enviosService.findAll();
  }
}
