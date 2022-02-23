import { Body, Controller, Get, Param, Post, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }

    @Post('/')
    async logIn() {
        const init = await this.authService.login()
    }
}
