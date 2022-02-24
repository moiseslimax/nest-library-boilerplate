import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginDTO {
    @IsString()
    readonly emailAddress: string;

    @IsString()
    readonly password: string;
}