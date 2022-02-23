import { Injectable } from '@nestjs/common';
import {
  Repository,
  EntityRepository,
} from 'typeorm';
import { RegisterDTO } from './dto/registerDTO';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (UserDto: RegisterDTO) => {
    return await this.save(UserDto);
  };
}
