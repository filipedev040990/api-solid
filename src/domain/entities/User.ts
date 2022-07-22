import { uuid } from 'uuidv4';
export class User {
    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;
    public created_at?: Date;
    public updated_at?: Date;

    constructor(props: Omit<User, 'id'| 'created_at'| 'updated_at'>, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}