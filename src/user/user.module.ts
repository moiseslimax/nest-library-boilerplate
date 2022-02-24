import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { LocalStrategy } from 'src/auth/strategy/local.strategy';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserRepository } from './user.repository';


@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class UserModule { }
