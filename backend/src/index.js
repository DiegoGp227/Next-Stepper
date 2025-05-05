import express from "express"
import cors from "cors";

const corsConfiguration = {
    origin: 'http://localhost:5500', 
    credentials: true, 
};

const app = express()

app.use(cors(corsConfiguration))
app.use(express.json())

const PORT = 3000 
app.listen(PORT);

console.log("backend listend on port" + PORT)