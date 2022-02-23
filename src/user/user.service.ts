import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { RegisterDTO } from './dto/registerDTO';
import { Connection } from 'typeorm';

@Injectable()
export class UserService {
  private userRepository: UserRepository;
  constructor(
    private readonly connection: Connection
  ) {
    this.userRepository = this.connection.getCustomRepository(UserRepository);
  }

  async register(user: RegisterDTO): Promise<User> {
    const newUser = this.userRepository.create(user)
    return await this.userRepository.save(newUser);
  }
}
