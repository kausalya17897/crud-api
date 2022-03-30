import db from '../mongo.js';
import { ObjectId } from 'mongodb';

const service={
   async getBio(request,response){
        try{
            const data=await db.employee.find().toArray();
            console.log("bio fetched")
            response.json({status:"success",data});
                }catch(err){
                    console.log(" error in bio fetching")
                    response.json({status:"error",error:err})
                }
    },
    async addBio(request,response){
        try{
            const {insertedId:_id}=await db.employee
            .insertOne(request.body);
            console.log("bio inserted",_id,request.body)
            response.json({status:"success",data:{ _id, ...request.body}});
        console.log("bio added")

        console.log("log")
                }catch(err){
                    console.log("error in bio inserted")
                    response.json({ status: "error", error: "Cannot insert bio" });
                }
    },
    async updateBio(request,response){
        try{
            //validation params and body
            //validation indb
            const {value}=await db.employee
            .findOneAndUpdate(
                {_id:ObjectId(request.params.id)},
                {$set:{...request.body}},
                {returnDocument:"after"});
               //new version mongodb {returnNewDocument:"true"}
               console.log("bio edited",request.params.id,request.body)
            response.json({status:"success",data:value});
                }catch(err){
                    console.log("error in bio edited")
                    response.json({status:"error",error:"Cannot update"});
                }
    },
    async deleteBio(request,response){
        try{
            await db.employee
            .deleteOne({_id:ObjectId(request.params.id)});
            console.log("bio deleted",request.params.id)
            response.json({status:"success"})
        }catch(err){
            console.log("error in bio deleted")
            response.json({status:"err",error:"cannot delete"})
        }
    }
}
export default service;