import { group } from "console";
import Elysia from "elysia";
import { TaskController } from "../controller/task.controller";

export const TaskRoutes = new Elysia()

TaskRoutes.group("task", (group: any) => {
    console.log("Task Routes")
    
    group.get("/getall", TaskController.getAllTask)  
    group.post("/create", TaskController.createTask)
    group.get("/get", TaskController.getTask)
    group.put("/update", TaskController.updateTask)
    group.delete("/delete", TaskController.deleteTask)
    return group
})

TaskRoutes.get("/", () => "Server is running on port 3000")