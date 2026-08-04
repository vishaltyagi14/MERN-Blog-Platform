import "dotenv/config";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import connectDB from "./config/db.js";
import router from "./routes/route.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});