import express from 'express'
const app= express()
const PORT =process.env.PORT||8000
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config();
// Connect database By call
connectDB();


// Route
app.get('/',(req,res)=>{
    res.send("<h1>hello</h1>")
})

// Listen port

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})