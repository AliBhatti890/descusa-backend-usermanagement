import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    
        task_subject: { type: String, required: true },

        task_detail: { type: String, required: true },
        assignee_to: { type: String, required: true },
        status: { type: String, required: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now } 
      
})

export const Task = mongoose.model("Task", taskSchema )