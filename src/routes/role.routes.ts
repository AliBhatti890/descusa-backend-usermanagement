import { group } from "console";
import Elysia from "elysia"; 
import { RoleController } from "../controller/role.controller";


export const RoleRoutes = new Elysia()

RoleRoutes.group("role", (group: any) => {
    
    group.get("/getall", RoleController.getAllRoles)  
    // group.get("/create", UserController.createUser)


    return group
})
 