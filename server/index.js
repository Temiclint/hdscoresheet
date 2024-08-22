import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { userRoutes } from './routes/userRoutes.js';
import bodyParser from 'body-parser'



const app = express();

// const bodyParser = bodyparser(); 

const PORT = process.env.PORT || 3000

// json data model
app.use(express.json());
 
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, ()=>{
    console.log (`server listening at PORT : ${PORT}`)
})

// specify the routes

//user routes
app.use('/api/Users', userRoutes)