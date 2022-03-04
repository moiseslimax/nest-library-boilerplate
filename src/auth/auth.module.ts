import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'local' }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.envConfig.secretJWT,
                    signOptions: {
                        expiresIn: '60',
                    },
                };
            },

        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy]
})

export class AuthModule { }
