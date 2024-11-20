import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pageRoutes from '../routes/index.routes.js';



dotenv.config(); 

const corsConfiguration = {
    origin: 'http://localhost:5173', 
    credentials: true, 
};

const PORT = process.env.PORT; 

const app = express();

app.use(cors(corsConfiguration));
app.use("/api", pageRoutes);

app.listen(PORT)

console.log(`Hello world, i am listening on port ${PORT}`)