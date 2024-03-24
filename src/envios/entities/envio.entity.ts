import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Envio {
    @PrimaryGeneratedColumn()
    id_envio: number;

    @Column()
    destinatario: string;

    @Column()
    remitente: string;

    @Column()
    contenido: string;

    @Column()
    fecha_envio: Date;

    @Column("decimal", { precision: 10, scale: 2})
    distancia: number;

    @Column("decimal", { precision: 10, scale: 2})
    tarifa: number;
}
