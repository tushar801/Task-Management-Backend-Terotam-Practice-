
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }
   
})

export const Task = mongoose.model('Task', taskSchema);