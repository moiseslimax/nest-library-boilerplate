import { RegisterDTO } from 'src/user/dto/registerDTO';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';

describe('UserService', () => {
    let userRepository: UserRepository;
    let userService: UserService;

    beforeEach(() => {
        userRepository = new UserRepository();
        userService = new UserService(userRepository);
    });

    describe('register', () => {
        it('should return a user', async () => {
            const request: RegisterDTO = {
                name: 'teste',
                password: 'teste',
                emailAddress: 'teste'
            };

            const userDTO: User = {
                id: '',
                name: '',
                emailAddress: '',
                createdAt: new Date(),
                updatedAt: new Date(),
                password: '',
                hashPassword: () => null,
                validatePassword: () => null
            }

            userRepository.create = jest
                .fn()
                .mockResolvedValue(Promise.resolve(userDTO));

            userRepository.save = jest
                .fn()
                .mockResolvedValue(Promise.resolve(userDTO));

            const result = await userService.register(request);

            expect(userRepository.create).toBeCalledWith(request);
            expect(userRepository.save).toBeCalledWith(userDTO);
            expect(result).toEqual(userDTO);
        });
    });
});