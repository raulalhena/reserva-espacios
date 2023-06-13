import { Injectable } from '@nestjs/common';
import { CreateEspacioDTO } from './dtos/create-spacio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Espacio } from './entities/espacio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EspacioService {
    constructor(
        // Inyección de metodos para la conexión a bbdd (queries), intermediario
        @InjectRepository(Espacio) private espacioRepository: Repository<Espacio>,
    ) { }

    async findAll(): Promise<Espacio[]> {
        return this.espacioRepository.find();
    }

    create(createEspacioDto: CreateEspacioDTO) {
        return this.espacioRepository.save(createEspacioDto);
    }
}
