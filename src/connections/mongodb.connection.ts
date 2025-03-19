import mongoose from "mongoose"
require('dotenv').config()

const connectionString = process.env.MONGO_DB_URL || ""


// Connect to MongoDB
export const connectToDataBase = async () => {

try {
    console.log(connectionString, "connection string")
    await mongoose.connect(connectionString)

} catch (err: any) {
    throw new Error(err)
}
}