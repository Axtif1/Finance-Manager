import mongoose from "mongoose"

const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || process.env.MONGO_URL)
        console.log(`DB Connection Successfully ${conn.connection.name}`)
    } catch (error) {
        console.log(`DB Connection failed:`, error.message)
    }
}

export default connectDb