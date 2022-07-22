import { User } from '../entities/User';
import { IUserRepository } from './IUserRepository';

export class LocalRepository implements IUserRepository {
    private users: User[] = [];    
    
    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
        console.log(this.users)
    }
}