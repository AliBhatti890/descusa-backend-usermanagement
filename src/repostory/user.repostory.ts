import { User } from "../model/user.model";
import { users } from "../types/user.types";

export const UserRepository = {
    getAllUsersFromModel: async () => {
        try {
            return await User.find(); // Correct Mongoose method
        } catch (error: any) {
            throw new Error(error?.message || "Error fetching users");
        }
    },

    createUser: async (user: users) => {
        try {
            console.log("Received user in Repository:", user);
            return await User.create(user); // Mongoose creates a new document
        } catch (error: any) {
            throw new Error(error?.message || "Error creating user");
        }
    },

    getUserByuser_id: async (_id: string) => {  
        try {
            return await User.findOne({ _id }); // `findOne` is correct for Mongoose
        } catch (error: any) {
            throw new Error(error?.message || "Error fetching user");
        }
    },

    updateUser: async (_id: string, updatedUser: any) => {
        try {
            return await User.findOneAndUpdate({ _id }, updatedUser, { new: true }); 
            // `new: true` returns the updated document
        } catch (error: any) {
            throw new Error(error?.message || "Error updating user");
        }
    },

    deleteUser: async (_id: string) => {
        try {
            return await User.findOneAndDelete({ _id }); // `findOneAndDelete` is correct
        } catch (error: any) {
            throw new Error(error?.message || "Error deleting user");
        }
    },




    getUserByEmail: async (users_email:  string) => {
        try {
            return await User.findOne({ email: users_email });
        } catch (error : any) {
            throw new Error(error.message);
        }
    }
};
