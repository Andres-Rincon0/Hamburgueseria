//importamos las dependecias 
import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";


const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT
conectarDB();

app.listen(PORT,()=>{
    console.log(`DB: ${PORT}`);
})