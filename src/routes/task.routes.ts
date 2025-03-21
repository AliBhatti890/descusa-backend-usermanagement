import { Elysia } from "elysia";
import { TaskController } from "../controller/task.controller"; // ✅ Fixed import

let TaskRoutes = new Elysia(); // ✅ Fixed missing `()`

TaskRoutes = TaskRoutes.group("/task", (group) => { // ✅ Correctly assigned
  console.log("Task Routes");

  group.get("/getall", TaskController.getAllTask);
  group.post("/create", TaskController.createTask);
  group.get("/get", TaskController.getTask);
  group.put("/update", TaskController.updateTask);
  group.delete("/delete", TaskController.deleteTask);

  return group;
});

// ✅ Optional: Add a base route to check if the server is running
TaskRoutes = TaskRoutes.get("/", () => "Server is running on port 3000");

export default TaskRoutes; // ✅ Correctly exported
