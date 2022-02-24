import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/loginDTO';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/')
    async logIn(@Res() res: Response, @Body() params: LoginDTO) {
        const user = await this.authService.login(params);

        return res.send(user)
    }
}
