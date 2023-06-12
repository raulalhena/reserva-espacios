import { Controller, Get, Post, Body } from '@nestjs/common';
import { EspacioService } from './espacio.service';
import { CreateEspacioDTO } from './dtos/create-spacio.dto';

@Controller('espacio')
export class EspacioController {
    constructor(private espacioService: EspacioService) { };

    // GET obtener todos los espacios
    @Get()
    findAll() {
        return this.espacioService.findAll();
    }

    @Post()
    create(@Body() createEspacioDto: CreateEspacioDTO) {
        return this.espacioService.create(createEspacioDto);
    }
}
