import { Injectable } from '@nestjs/common';
import { CreateEspacioDTO } from './dtos/create-spacio.dto';

@Injectable()
export class EspacioService {

    async findAll(): Promise<any> {
        return 'soy un espacio service';
    }

    create(createEspacioDto: CreateEspacioDTO) {
        return 'post del espacio';
    }
}
