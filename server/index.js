import express from 'express';
import mongoose from 'mongoose';
import dotenv from'dotenv'
dotenv.config();
import cors from 'cors';
import {postLink , getSlugRedirect} from './controllers/link.js'


const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ||5000;

const connectDB = async()=>{

const conn= await mongoose.connect(process.env.MONGO_URL); 
if (conn){
    console.log(`connected to mongoDB..`);
}
else{
    console.log("mongodb ")
}
    
};
connectDB();

app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message:"All good.."
    })
})

app.post("/link",postLink)

app.get("/:slug",  getSlugRedirect)

app.listen(PORT,()=>{
    console.log(`Server is running on port  ${PORT}`);
})