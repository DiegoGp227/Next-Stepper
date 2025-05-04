import express from "express"
import cors from "cors";

const corsConfiguration = {
    origin: 'http://localhost:5500', 
    credentials: true, 
};

app.use(cors(corsConfiguration))
app.use(express.json())

const PORT = 3000 
app.listen(PORT)