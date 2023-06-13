import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudService } from './solicitud.service';
import { Solicitud } from './entities/solicitud.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateSolicitudDTO } from './dtos/create-solicitud.dto';

const solicitudes: any = [
  {
    id: 1,
    nombre: "Sara",
    cargo: "formador",
    promocion: 'p7',
    email: "sara@example.com",
    tipo: 'masterclass',
    nombreActividad: 'Taller Testing APIs NestJS',
    start: Date,
    end: Date,
    dia: "Lunes",
    horaInicio: "17:00",
    horaFin: "19:00",
  }
];

describe('SolicitudService', () => {
  let service: SolicitudService;
  const mockSolicitudRepositoryService = {
    find: jest.fn().mockReturnValue(Promise.resolve({ solicitudes })),
    save: jest.fn().mockImplementation((createSolicitudDto: CreateSolicitudDTO) => {
      return {
        id: 1,
        ...createSolicitudDto
      };
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SolicitudService,
        {
          provide: getRepositoryToken(Solicitud),
          useValue: mockSolicitudRepositoryService,
        }
      ]
    }).compile();

    service = module.get<SolicitudService>(SolicitudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll() should return an array solicitudes', async () => {
    expect(await service.findAll()).toMatchObject({ solicitudes });
  });

  it('create a new solicitud return a new solicitud', async () => {
    const newSolicitud = {
      nombre: "Luis",
      cargo: "formador",
      promocion: 'p7',
      email: "luis@example.com",
      tipo: 'masterclass',
      nombreActividad: 'Taller Testing APIs NestJS',
      start: new Date(),
      end: new Date(),
      dia: "Lunes",
      horaInicio: "17:00",
      horaFin: "19:00",
    }

    expect(await service.create(newSolicitud)).toMatchObject({
      id: expect.any(Number)
    })
  });

});
