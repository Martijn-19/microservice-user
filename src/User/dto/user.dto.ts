import { IsNotEmpty } from 'class-validator';
import { PrimaryGeneratedColumnIdentityOptions } from 'typeorm/decorator/options/PrimaryGeneratedColumnIdentityOptions';

export class UserDTO {
  @IsNotEmpty()
  userID: number;
  name: string;
  email: string;
  password: string;
  role: string;
}