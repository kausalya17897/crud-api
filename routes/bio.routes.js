import express from "express";
import service from "../services/bio.service.js";
const route=express.Router();
route.get("/",service.getBio)
route.post("/",service.addBio)
route.put("/:id", service.updateBio)
route.delete("/:id",service.deleteBio)   

export default route;