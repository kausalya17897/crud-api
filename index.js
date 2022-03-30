import express from 'express'
import { MongoClient } from "mongodb";
import mongo from 'mongo.js';
(async()=>{
    try{
const app=express();
const PORT=9000;
await mongo.connect();
app.get("/",(request,response)=>{
    response.send("/hello")
})

app.listen(PORT,()=>console.log("Mongodb connected"))
    }
    catch(err){
        console.error(err)
    }
})()