
import { Task } from "../model/task.model";
import { Tasks } from "../types/task.types";


export const TaskRepository = {
    getAllTasksFromModel: async () => {
        try {
            return await Task.find(); 
        } catch (error: any) {
            throw new Error(error?.message || "Error fetching Tasks");
        }
    },

    createTask: async (taskData: Tasks) => {
        try {
            return await Task.create(taskData); 
        } catch (error: any) {
            throw new Error(error?.message || "Error creating Task");
        }
    },

    getTaskByTask_id: async (_id: string) => {
        try {
            console.log(_id, "Task ID")
            return await Task.findOne({ _id }); 
        } catch (error: any) {
            throw new Error(error?.message || "Error fetching Task");
        }
    },

    updateTask: async (_id: string, updatedTask: any) => {
        try {
            return await Task.findOneAndUpdate({ _id }, updatedTask, { new: true }); 
            // `new: true` returns the updated document
        } catch (error: any) {
            throw new Error(error?.message || "Error updating Task");
        }
    },

    deleteTask: async (_id: string) => {
        try {
            return await Task.findOneAndDelete({ _id }); // `findOneAndDelete` is correct
        } catch (error: any) {
            throw new Error(error?.message || "Error deleting Task");
        }
    }
};
