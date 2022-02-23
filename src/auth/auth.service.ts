import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AuthService {
    constructor() { }

    async login() {
        console.log('service login')
    }
}
