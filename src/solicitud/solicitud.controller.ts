import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSolicitudDTO } from './dtos/create-solicitud.dto';
import { SolicitudService } from './solicitud.service';

@Controller('solicitud')
export class SolicitudController {

    constructor(private solicitudService: SolicitudService) { };

    @Get()
    findAll() {
        return this.solicitudService.findAll();
    }

    @Post()
    create(@Body() createSolicitudDto: CreateSolicitudDTO) {
        return this.solicitudService.create(createSolicitudDto);
    }

}
