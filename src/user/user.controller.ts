<<<<<<< Updated upstream
import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { FindUserDto } from './dto/findUserDTO';
import { User } from './user.entity';
=======
import { Body, Controller, Get, Param, Post, Res, UseFilters, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth-guard';
import { LocalStrategy } from 'src/auth/strategy/local.strategy';
import { RegisterDTO } from './dto/registerDTO';
>>>>>>> Stashed changes
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

<<<<<<< Updated upstream
  @Get('/:id')
  findById(@Param() param: FindUserDto): Promise<User> {
    const { id } = param;
    return this.userService.findById(id);
=======
  @Post('/register')
  async register(@Res() res: Response, @Body() params: RegisterDTO) {
    const { emailAddress } = await this.userService.register(params);

    res.send({ emailAddress }).status(201);
>>>>>>> Stashed changes
  }
}
