import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
 import { UserRoutes } from "./routes/user.routes";
import { connectToDataBase } from "./connections/mongodb.connection";
 import { RoleRoutes } from "./routes/role.routes";
 import TaskRoutes from "./routes/task.routes";
import AuthRoutes from "./routes/auth.routes";

let app = new Elysia(); // ✅ Fixed missing `()`

console.log("Server is running on port 3000");

// ✅ Fixed `.use()` chain by reassigning to `app`
app = app
  .use(swagger())
  .use(cors())
  .use(AuthRoutes) // ✅ Fixed incorrect route import
   .use(UserRoutes)
   .use(RoleRoutes)
   .use(TaskRoutes);

connectToDataBase()
  .then(() => console.log("Connection Successful to MongoDB"))
  .catch((err) => console.error("Database Connection Error:", err));

app.listen(3000, () => 
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
);
