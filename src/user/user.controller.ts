import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { FindUserDTO } from './dto/findUserDTO';
import { RegisterDTO } from './dto/registerDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/register')
  async register(@Res() res: Response, @Body() params: RegisterDTO) {
    const { emailAddress } = await this.userService.register(params);

    res.send({ emailAddress }).status(201);
  }

  @Get('/:id')
  async getUserProfile(@Res() res: Response, @Body() params: FindUserDTO) {
    const user = await this.userService.getUserProfile(params.id);

    res.send(user).status(200);
  }

}
