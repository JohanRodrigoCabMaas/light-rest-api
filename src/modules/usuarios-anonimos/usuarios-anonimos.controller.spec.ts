import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosAnonimosController } from './usuarios-anonimos.controller';

describe('UsuariosAnonimosController', () => {
  let controller: UsuariosAnonimosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosAnonimosController],
    }).compile();

    controller = module.get<UsuariosAnonimosController>(UsuariosAnonimosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
