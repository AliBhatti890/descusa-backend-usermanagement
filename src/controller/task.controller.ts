import { TaskRepository } from "../repostory/task.repostory";
import { UserRepository } from "../repostory/user.repostory";
import { UserController } from "./user.controller";


export const TaskController = {

  createTask: async ({ body, error,set }: any) => {
    try {
      console.log("Received Body:", body);

      const newUser = await TaskRepository.createTask({
        task_subject: body.task_subject,
        task_detail: body.task_detail,
        assignee_to: body.assignee_to,
        status: body.status,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      console.log("New Task Created Successfully", newUser);
      return set.status = 200, {message: "Ne Task create Sucessfully Get", data: newUser}
    } catch (err: any) {
      return error(400, err.message || "Error creating Task");
    }
  },

  getAllTask: async ({ error }: any) => {
    try {
      console.log("Received Params:");
      
      const tasks = await TaskRepository.getAllTasksFromModel(); // Fetch all tasks
  
      // Fetch assignees and include `first_name` directly in the task object
      const tasksWithAssignees = await Promise.all(
        tasks.map(async (task) => {
          const user = task.assignee_to 
            ? await UserRepository.getUserByuser_id(task.assignee_to) 
            : null;
            
          return { 
            ...task.toObject(),  // Convert Mongoose document to plain object
            first_name: user ? user.first_name : null, // Add first_name directly to the task object
            user_type: user ? user.user_type : null
          }; 
        })
      );
  
      return {
        status: 200,
        body: { message: "All Tasks Retrieved Successfully", data: tasksWithAssignees },
      };
    } catch (err: any) {
      return error(500, err.message || "Error fetching tasks");
    }
  },
  
  
  getTask: async ({ params, error, query ,set}: any) => {
    try {
    console.log("Received Params: " , params, query);
    const task = await TaskRepository.getTaskByTask_id(query._id);
    if (!task) {
      return set.status(404).json({ error: "Task not found" });
    }

      const user = task.assignee_to ? await UserRepository.getUserByuser_id(task.assignee_to) : null;
    return set.status = 200, {message: "Get single Task Sucessfully Get", data: task, 
        assignee: user
    }
    }
   
    
     catch (err: any) {
      return error(500, err.message || "Error fetching Task");
    }
  },

  updateTask: async ({ params, body, error, query }: any) => {
    try {
      const updatedUser = await TaskRepository.updateTask(body._id, body);
      if (!updatedUser) {
        return error(404, "Task not found");
      }
      return {
        status: 200,
        body: { message: "Task Updated Successfully", data: updatedUser },
      };
    } catch (err: any) {
      return error(500, err.message || "Error updating Task");
    }
  },

  deleteTask: async ({ params, error,query }: any) => {
    try {
      const deletedUser = await TaskRepository.deleteTask(query._id);
      if (!deletedUser) {
        return error(404, "Task not found");
      }
      return {
        status: 200,
        body: { message: "Task Deleted Successfully" },
      };
    } catch (err: any) {
      return error(500, err.message || "Error deleting Task");
    }
  },
};
