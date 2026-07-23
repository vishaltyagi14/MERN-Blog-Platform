import express from 'express'
import cors from "cors"
const app = express()
const PORT = process.env.PORT || 8000
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import router from './routes/route.js';
import bodyParser from 'body-parser';

// Cors
app.use(cors())
// Json Support
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
dotenv.config();
// Connect database By call
connectDB();
// Routes

app.use('/api', router)

// Listen port

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})