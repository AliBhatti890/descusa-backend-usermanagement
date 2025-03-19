import { Role } from "../model/roles.model";

export const RoleRepository = {
    getAllRoles: () => Role.find()
}