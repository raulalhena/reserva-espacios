import { Controller, Get, Post, Body } from '@nestjs/common';
import { EspacioService } from './espacio.service';
import { CreateEspacioDTO } from './dtos/create-spacio.dto';

// Pasamos el final del endpoint (url) al decorador
@Controller('espacio')
export class EspacioController {
    // Inyectamos las dependencias a través del constructor
    constructor(private espacioService: EspacioService) { };

    // GET obtener todos los espacios
    @Get()
    findAll() {
        return this.espacioService.findAll();
    }

    // POST crear un espacio
    @Post()
    create(@Body() createEspacioDto: CreateEspacioDTO) {
        return this.espacioService.create(createEspacioDto);
    }
}
