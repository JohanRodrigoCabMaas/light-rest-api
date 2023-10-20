import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosAnonimosService } from './usuarios-anonimos.service';

describe('UsuariosAnonimosService', () => {
  let service: UsuariosAnonimosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosAnonimosService],
    }).compile();

    service = module.get<UsuariosAnonimosService>(UsuariosAnonimosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
