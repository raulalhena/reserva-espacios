import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["email"])
export class Solicitud {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string; // 'Sara'

    @Column()
    cargo: string; // 'formador'

    @Column()
    promocion: string; // 'p7'

    @Column()
    email: string;

    @Column()
    tipo: string; // 'masterclass'

    @Column()
    nombreActividad: string; //'Taller Testing APIs NestJS'

    @Column()
    start: Date;

    @Column()
    end: Date;

    @Column()
    dia: string;

    @Column()
    horaInicio: string;

    @Column()
    horaFin: string;
}