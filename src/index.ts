import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { registerUser } from './controllers/userController';
import { createTask, getTasks, updateTask, deleteTask } from './controllers/taskController';

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ProjectDb').then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error", err);
});


app.post('/register', registerUser);
app.post('/tasks', createTask);
app.get('/tasks', getTasks);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});