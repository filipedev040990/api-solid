import { Request, Response, Router } from "express";
import { createUserController } from "./domain/use-cases/user";

const router = Router();

router.post('/users', (req: Request, res: Response) => {
    createUserController.execute(req, res);
});

export { router }