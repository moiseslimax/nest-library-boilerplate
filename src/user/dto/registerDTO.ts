import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterDTO {
    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly name: string;

    @IsEmail()
    readonly emailAddress: string;
}