import { Role } from "../model/roles.model"
import { RoleRepository } from "../repostory/role.reposetory"


export const RoleController = {

    getAllRoles: async ({ set, error }: any) => {
        try {
            
            const roles = await RoleRepository.getAllRoles()

            return set.status = 200, {message: "All Roles Sucessfully Get", data: roles}

        } catch (err: any) {
            
            error(400, {
                message: "Error in getting roles",
                error: err
            })
        }
    }



    
}