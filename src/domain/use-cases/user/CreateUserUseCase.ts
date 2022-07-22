import { ICreateUser } from './ICreateUser';
import { User } from './../../entities/User';
import { IUserRepository } from './../../repositories/IUserRepository';
export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}
    async execute(data: ICreateUser): Promise<User> {
       
        const userExists = await this.userRepository.findByEmail(data.email);
        if(userExists) {
            throw new Error('User already exists.');
        }

        const newUser = new User(data);
        return await this.userRepository.save(newUser);
    }
}