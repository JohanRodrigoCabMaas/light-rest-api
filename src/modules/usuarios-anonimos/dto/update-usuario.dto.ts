import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioAnonimoDto } from './create-usuario.dto';

export class UpdateUsuarioAnonimoDto extends PartialType(CreateUsuarioAnonimoDto) {
  id: number;
}
