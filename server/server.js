import express from 'express'
const app= express()
const PORT =process.env.PORT||8000
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import router from './routes/route.js';

app.use(express.json());
dotenv.config();
// Connect database By call
connectDB();


// Route
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/api',router)

// Listen port

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})