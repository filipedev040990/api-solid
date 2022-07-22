import { CreateUserController } from '../../../infra/controllers/CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { LocalRepository } from './../../repositories/LocalRepository';
import { MailtrapMail } from '../../../providers/mail/MailtrapMail';

const userRepository = new LocalRepository();
const mailProvider = new MailtrapMail();

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailProvider
);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }