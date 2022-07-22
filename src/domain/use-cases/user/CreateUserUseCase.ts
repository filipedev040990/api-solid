import { ICreateUser } from './ICreateUser';
import { User } from './../../entities/User';
import { IUserRepository } from './../../repositories/IUserRepository';
import { IMailtrapMail } from '../../../providers/mail/IMailtrapMail';

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private providerMail: IMailtrapMail
    ){}
    async execute(data: ICreateUser): Promise<void> {
       
        const userExists = await this.userRepository.findByEmail(data.email);
        if(userExists) {
            throw new Error('User already exists.');
        }

        const newUser = new User(data);
        await this.userRepository.save(newUser);

        await this.providerMail.sendMail({
            to:{
                name: data.name,
                email: data.email
            },
            from: { 
                name: 'Equipe dev Node',
                email: 'equipedevnode@gmail.com'
            },
            subject: 'Seja bem-vindo',
            body: 'Você já pode acessar nossa plataforma!'
        })
    }
}