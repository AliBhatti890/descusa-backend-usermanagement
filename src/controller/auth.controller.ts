import { UserRepository } from "../repostory/user.repostory";

export const AuthController = {
    login: async ({ body, error, set } : any) => {
        try {
            const { email, password } = body;
    
            if (!email || !password) {
                return error(400, "Email and Password are required");
            }
    
            const user = await UserRepository.getUserByEmail(email.toLowerCase());
    
            if (!user || user.password !== password) {
                return error(400, "Invalid credentials");
            }
    
            const data = {
                user_id: user._id,
                email: user.email,
                name: user.first_name,
                user_type: user.user_type,
            };
    
            return set.status = 200, { message: "Login Successfully", data };
        } catch (err: any) {
            return error(500, err.message || "Login Failed");
        }
    }
};
