import { IsEmail, IsNotEmpty, IsString, IsUrl} from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({message: "All fields are required!"})
  username: string; // required().string().max(1)

  @IsUrl()
  @IsNotEmpty({message: "All fields are required!"})
  avatar: string;

}