import { Elysia } from "elysia"
import { swagger } from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'
import { UserRoutes } from "./routes/user.routes"
import { connectToDataBase } from "./connections/mongodb.connection"
import { RoleRoutes } from "./routes/role.routes"
import { TaskRoutes } from "./routes/task.routes"

const app = new Elysia()
console.log("Server is running on port 3000")

        app
            .use(swagger())
            .use(cors())
            .use(UserRoutes)  
            .use(RoleRoutes)
            .use(TaskRoutes) 

          connectToDataBase()
                             .then(() => console.log("Connection Succesfull to Mongo DB"))
                             .catch((err) => console.error(err))    


        app.listen(3000, () => console.log(
          `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
        ))



// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);


