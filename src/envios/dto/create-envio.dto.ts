import { IsDateString, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateEnvioDto {

    @IsString()
    @MinLength(1)
    destinatario: string;

    @IsString()
    @MinLength(1)
    remitente: string;

    @IsString()
    @MinLength(1)
    contenido: string;

    @IsDateString()
    fecha_envio: Date;

    @IsNumber()
    @IsPositive()
    distancia: number;

}
