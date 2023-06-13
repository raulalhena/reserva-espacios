import { Test, TestingModule } from '@nestjs/testing';
import { EspacioService } from './espacio.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Espacio } from './entities/espacio.entity';
import { CreateEspacioDTO } from './dtos/create-spacio.dto';

const espacios: any = [
  {
    id: 1,
    edificio: "A",
    aula: "2C",
  }
];

describe('EspacioService', () => {
  let service: EspacioService;
  const mockEspacioRepositoryService = {
    find: jest.fn().mockReturnValue(Promise.resolve(espacios)),
    save: jest.fn().mockImplementation((createEspacioDto: CreateEspacioDTO) => {
      return {
        id: 1,
        ...createEspacioDto
      };
    })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspacioService,
        {
          provide: getRepositoryToken(Espacio),
          useValue: mockEspacioRepositoryService,
        },
      ],
    }).compile();

    service = module.get<EspacioService>(EspacioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll() should return the array espacios', async () => {
    expect(await service.findAll()).toMatchObject(espacios);
  });

  it('should create a space and return the new space {id: 2, edificio: "B", aula: "1A"}', async () => {
    const newSpace = { edificio: "B", aula: "1A" };

    expect(await service.create(newSpace)).toMatchObject({
      id: expect.any(Number),
    });
  });
});
