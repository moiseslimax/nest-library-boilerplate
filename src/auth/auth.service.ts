import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Connection } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/loginDTO';
import { UserRepository } from 'src/user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    private userRepository: UserRepository;
    constructor(
        private readonly connection: Connection,
        private jwtTokenService: JwtService
    ) {
        this.userRepository = this.connection.getCustomRepository(UserRepository);
    }

    async loginWithCredentials(user) {
        const payload = { emailAddress: user.emailAddress, sub: user.userId };

        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }


    async login(userLoginData: LoginDTO) {

        const user = await this.validateUser(userLoginData);

        const isValid = await bcrypt.compare(userLoginData.password, user.password);

        if (!isValid) {
            throw new UnauthorizedException('Wrong Password!');
        }

        return await this.loginWithCredentials(user)
    }

    async validateUser(userLoginData): Promise<User> {
        const user = await this.userRepository.findOne({ emailAddress: userLoginData.emailAddress });

        if (!user) {
            throw new UnauthorizedException('User not found!');
        }
        return user;
    }
}
