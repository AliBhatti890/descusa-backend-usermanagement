import { group } from "console";
import Elysia from "elysia";
import { UserController } from "../controller/user.controller";


export const UserRoutes = new Elysia()

UserRoutes.group("user", (group: any) => {
    
    group.get("/getall", UserController.getAllUsers)  
    group.post("/create", UserController.createUser)
    group.get("/get", UserController.getUser)
    group.put("/update", UserController.updateUser)
    group.delete("/delete", UserController.deleteUser)


    return group
})

UserRoutes.get("/", () => "Server is running on port 3000")