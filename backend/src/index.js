/*    first approach to connect to database(all in 1 file)
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"
const app = express()

( async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        app.on ("error", (error)=>{
            console.log("ERR:",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log("Server is running")
        })
    }catch(error){
        console.error("ERROR: ", error)
        throw error
    }
})()
*/


//second approach
// require('dotenv').config()  will work bt disturbs the consistency of the code 

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js";

dotenv.config({
    path:'./.env'
});

connectDB()
.then (()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server is running on ${process.env.PORT}`)
    });

    app.on("error",(error)=>{
        console.log("Server Error: ",error);
    });
})
.catch((err)=>{
    console.log("mongodb connection failed",err);
})



