import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { FindUserDto } from './dto/findUserDTO';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/:id')
  findById(@Param() param: FindUserDto): Promise<User> {
    const { id } = param;
    return this.userService.findById(id);
  }
}
