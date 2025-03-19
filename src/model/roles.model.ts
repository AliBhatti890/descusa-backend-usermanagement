import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    
    rolename: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const Role = mongoose.model("roles", userSchema)