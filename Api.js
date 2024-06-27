
const { Getallblogs, Createblogs} = require("./Controller");
const ConnecttoDB = require("./database");

const express=require("express").Router;

const Apiserver=express();

ConnecttoDB()

Apiserver.get("/",async(req,res)=>{
    let blogs;
try{
   blogs= await Getallblogs(req,res)
}
catch(error){
    console.log(error)
}  
      res.status(200).json({
            message:"api request successfully",
            parts:blogs
        })
})

Apiserver.post("/create",async(req,res)=>{
   try{
    const response=await Createblogs(req);
   if(response && response._id){
    res.status(200).json({
        message:"post request successfully",
        success:"true"
    })
   }else{
    res.status(200).json({
        message:"post request failed",
        success:"false"
    })
   }
   }catch(error){
    console.log(error)
   }
   
   
})



module.exports=Apiserver;