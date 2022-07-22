import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { hashSync } from 'bcryptjs';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async execute(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        try {
            const user = await this.createUserUseCase.execute({
                name,
                email,
                password: hashSync(password, 8)
            });
            return res.status(201).json(user);
        } catch(err) {
            return res.status(100).json({
                "status": "Error",
                "message": err.message
            });
        }
    }
}