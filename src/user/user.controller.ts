import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { FindUserDto } from './dto/findUserDTO';
import { User } from './user.entity';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth-guard';
import { LocalStrategy } from 'src/auth/strategy/local.strategy';
import { RegisterDTO } from './dto/registerDTO';
import { Body, Controller, Get, Param, Post, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { RegisterDTO } from './dto/registerDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get('/:id')
  findById(@Param() param: FindUserDto): Promise<User> {
    const { id } = param;
    return this.userService.findById(id);

  @Post('/register')
  async register(@Res() res: Response, @Body() params: RegisterDTO) {
    const { emailAddress } = await this.userService.register(params);

    res.send({ emailAddress }).status(201);
  }

}
