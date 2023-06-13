import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudController } from './solicitud.controller';
import { CreateSolicitudDTO } from './dtos/create-solicitud.dto';
import { SolicitudService } from './solicitud.service';

const solicitudes: any = [
  {
    id: 1,
    nombre: "Sara",
    cargo: "formador",
    promocion: 'p7',
    email: "sara@example.com",
    tipo: 'masterclass',
    nombreActividad: 'Taller Testing APIs NestJS',
    start: new Date(),
    end: new Date(),
    dia: "Lunes",
    horaInicio: "17:00",
    horaFin: "19:00",
  }
];

describe('SolicitudController', () => {
  let controller: SolicitudController;
  const mokSolicitudService = {
    findAll: jest.fn().mockImplementation(() => Promise.resolve({ solicitudes })),
    create: jest.fn().mockImplementation((createSolicitudDto: CreateSolicitudDTO) => {
      const newSolicitud = {
        id: 2,
        ...createSolicitudDto
      }
      solicitudes.push(newSolicitud);
      return Promise.resolve(newSolicitud);
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudController],
      providers: [SolicitudService]
    })
      .overrideProvider(SolicitudService)
      .useValue(mokSolicitudService)
      .compile();

    controller = module.get<SolicitudController>(SolicitudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll() should return an array of {Solicitud}', async () => {
    expect(await controller.findAll()).toMatchObject({ solicitudes });
  })

  it('should create a solicitud and return the new solicitud ', async () => {
    const newSolicitud = {
      nombre: "Luis",
      cargo: "formador",
      promocion: "p7",
      email: "luis@example.com",
      tipo: "masterclass",
      nombreActividad: "Taller Testing APIs NestJS",
      start: new Date(),
      end: new Date(),
      dia: "Lunes",
      horaInicio: "17:00",
      horaFin: "19:00",
    }

    expect(await controller.create(newSolicitud)).toMatchObject({
      id: expect.any(Number),
    });
  });
});
