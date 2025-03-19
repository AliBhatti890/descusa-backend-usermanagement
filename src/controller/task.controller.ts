import { TaskRepository } from "../repostory/task.repostory";


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
      const Task = await TaskRepository.getAllTasksFromModel();
      return {
        status: 200,
        body: { message: "All Task Retrieved Successfully", data: Task },
      };
    } catch (err: any) {
      return error(500, err.message || "Error fetching Task");
    }
  },

  getTask: async ({ params, error, query ,set}: any) => {
    try {
    console.log("Received Params: " , params, query);
      const Task = await TaskRepository.getTaskByTask_id(query._id);
      if (!Task) {
        return error(404, "Task not found");
      }
      return set.status = 200, {message: "Get single Task Sucessfully Get", data: Task}
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
