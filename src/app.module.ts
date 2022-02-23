import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.envConfig.typeormConnection,
        host: configService.envConfig.typeormHost,
        port: configService.envConfig.typeormPort,
        database: configService.envConfig.typeormDatabase,
        username: configService.envConfig.typeormUsername,
        password: configService.envConfig.typeormPassword,
        entities: [
          User
        ],
        synchronize: false,
        migrationsRun: false,
        migrations: [],
      }),
    }),
  ],
  controllers: [AppController]
})
export class AppModule { }
