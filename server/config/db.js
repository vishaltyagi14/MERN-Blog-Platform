import mongoose from "mongoose"

const connectDB =async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI)
        
    console.log("Connected to database");
}
catch (err) {
        console.log("Unable to connect to database: ",err.message)
        process.exit(1)
}

}
export default connectDB