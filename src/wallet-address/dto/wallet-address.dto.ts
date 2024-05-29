import { IsString, IsNotEmpty } from 'class-validator';
import { User } from '../../users/user.entity';
export class CreateWalletAddressDto {
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  user: User;
}
