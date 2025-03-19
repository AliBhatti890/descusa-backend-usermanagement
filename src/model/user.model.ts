import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    
        first_name: { type: String, required: true },
        department: { type: String, required: true },
        contact: { type: String, required: true },
        user_type: { type: String, required: true },
        email: { type: String, required: true , unique: true },
        password: { type: String , required: true }, /// roles could be user, admin, manager
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }   
})

export const User = mongoose.model("User", userSchema)