import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUsuarioDto {
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'la contraseña del usuario no puede estar vacía' })
  password: string;
}
