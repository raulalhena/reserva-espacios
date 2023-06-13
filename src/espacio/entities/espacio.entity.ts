import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Espacio {
    // PK autoincremental
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    edificio: string;

    @Column()
    aula: string;
}