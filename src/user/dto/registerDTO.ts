import { IsString, IsEmail } from 'class-validator';

export class RegisterDTO {
    @IsString()
    readonly password: string;

    @IsString()
    readonly name: string;

    @IsEmail()
    readonly emailAddress: string;
}