import { Injectable } from '@nestjs/common';
import { CreateSolicitudDTO } from './dtos/create-solicitud.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Solicitud } from './entities/solicitud.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitudService {

    constructor(
        @InjectRepository(Solicitud) private solicitudRepository: Repository<Solicitud>
    ) { }

    findAll(): Promise<Solicitud[]> {
        return this.solicitudRepository.find();
    }

    create(createSolicitudDto: CreateSolicitudDTO) {
        return this.solicitudRepository.save(createSolicitudDto);
    }

}
