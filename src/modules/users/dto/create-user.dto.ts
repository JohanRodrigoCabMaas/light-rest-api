export class CreateUserDto {
  id: number;
  username: string;
  password: string;
  email: string;
  fullName: string;
  isActive: boolean;
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  phoneNumber?: string;
  role: string;
  profileImageUrl?: string;
  bio?: string;
  preferredLanguage: string;
  accountBalance?: number;
}
