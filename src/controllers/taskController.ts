
import { Request, Response } from "express";
import { Task } from "../models/Task";

export const createTask = async (req: Request, res: Response) => {
    const { title, userId } = req.body;
    const task = new Task({ title, userId});
    await task.save();
    res.status(201).send(task);
};

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await Task.find();
    res.send(tasks);
};


export const updateTask = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { title, completed } = req.body; //y new values h

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });
        if (!updateTask) {
             return res.status(404).send({ message: "Task not found" });
        }
        res.send(updatedTask);
    }
    catch(error) {
        res.status(500).send({ message: "Error updating task", error });
    }

}




export const deleteTask = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).send({ message: "Task not found" });
        }
        res.send({ Task: "Task deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: "Error deleting task", error });
    }
};

