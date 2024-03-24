import { PartialType } from '@nestjs/mapped-types';
import { CreateEnvioDto } from './create-envio.dto';

export class UpdateEnvioDto extends PartialType(CreateEnvioDto) {}
