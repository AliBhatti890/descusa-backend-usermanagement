import { UserRepository } from "../repostory/user.repostory";


export const UserController = {
  createUser: async ({ body, error,set }: any) => {
    try {
      console.log("Received Body:", body);

      const newUser = await UserRepository.createUser({
        first_name: body.first_name,
        department: body.department,
        contact: body.contact,
        user_type: body.user_type,
        password: body.password,
         email: body.email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
      return set.status = 200, {message: "Ne User create Sucessfully Get", data: newUser}
    } catch (err: any) {
      return error(400, err.message || "Error creating user");
    }
  },

  getAllUsers: async ({ error }: any) => {
    try {
      const users = await UserRepository.getAllUsersFromModel();
      return {
        status: 200,
        body: { message: "All Users Retrieved Successfully", data: users },
      };
    } catch (err: any) {
      return error(500, err.message || "Error fetching users");
    }
  },

  getUser: async ({ params, error, query ,set}: any) => {
    try {
      const user = await UserRepository.getUserByuser_id(query._id);
      if (!user) {
        return error(404, "User not found");
      }
      return set.status = 200, {message: "Get single user Sucessfully Get", data: user}
    } 
   
    
     catch (err: any) {
      return error(500, err.message || "Error fetching user");
    }
  },

  updateUser: async ({ params, body, error, query }: any) => {
    try {
      const updatedUser = await UserRepository.updateUser(body._id, body);
      if (!updatedUser) {
        return error(404, "User not found");
      }
      return {
        status: 200,
        body: { message: "User Updated Successfully", data: updatedUser },
      };
    } catch (err: any) {
      return error(500, err.message || "Error updating user");
    }
  },

  deleteUser: async ({ params, error,query }: any) => {
    try {
      const deletedUser = await UserRepository.deleteUser(query._id);
      if (!deletedUser) {
        return error(404, "User not found");
      }
      return {
        status: 200,
        body: { message: "User Deleted Successfully" },
      };
    } catch (err: any) {
      return error(500, err.message || "Error deleting user");
    }
  },
};
