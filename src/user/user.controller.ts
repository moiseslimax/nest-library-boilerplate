import { Body, Controller, Get, Param, Post, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { RegisterDTO } from './dto/registerDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/register')
  async register(@Res() res: Response, @Body() params: RegisterDTO) {
    const { username } = await this.userService.register(params);

    res.send({ username }).status(201);
  }
}
