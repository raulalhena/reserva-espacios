import { Test, TestingModule } from '@nestjs/testing';
import { EspacioController } from './espacio.controller';
import { EspacioService } from './espacio.service';
import { CreateEspacioDTO } from './dtos/create-spacio.dto';

const espacios: any = [
  {
    id: 1,
    edificio: "A",
    aula: "2C",
  }
];

describe('EspacioController', () => {
  let controller: EspacioController;
  const mokEspacioService = {
    findAll: jest.fn().mockImplementation(() => Promise.resolve({ espacios })),
    create: jest.fn().mockImplementation((createEspacioDto: CreateEspacioDTO) => {
      const newSpace = {
        id: 2,
        ...createEspacioDto
      };
      espacios.push(newSpace);
      return Promise.resolve(newSpace);
    }),
  };
  // ARRANGE
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspacioController],
      providers: [EspacioService],
    })
      .overrideProvider(EspacioService)
      .useValue(mokEspacioService)
      .compile();

    // INSTANCIA DEL CONTROLLER
    controller = module.get<EspacioController>(EspacioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a spaces list', async () => {
    // ACT - Ejecución del método de prueba
    // const getMethod = controller.get();


    // ASSERT
    expect(await controller.findAll()).toMatchObject({ espacios });
  });

  it('should create a space and return the new space {id: 1, edificio: "A", aula: "2C"}', async () => {
    const newSpace = { edificio: "B", aula: "1A" };

    expect(await controller.create(newSpace)).toMatchObject({
      id: expect.any(Number),
    });
  });
});
