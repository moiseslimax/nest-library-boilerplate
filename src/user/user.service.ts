import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { RegisterDTO } from './dto/registerDTO';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  // private readonly userRepository: UserRepository;
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {
  }

  async register(user: RegisterDTO): Promise<User> {
    const newUser = await this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async getUserProfile(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id)

    delete user.password;
    return user;
  }
}
