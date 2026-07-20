import express from 'express'
const app= express()
const PORT =process.env.PORT||8000
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import router from './routes/route.js';

dotenv.config();
// Connect database By call
connectDB();


// Route
app.get('/',router)

// Listen port

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})