
import { Request, Response } from "express";
import { User } from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
    const { username, email } = req.body;
    const user = new User({ username, email });
    await user.save();
    res.status(201).send(user);
}

