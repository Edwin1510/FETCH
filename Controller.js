const Partsmodel = require("./database.model")


const Getallblogs=(req,res)=>{
   return  Partsmodel.find()
}

const Createblogs=(req,res)=>{
   const blogs=new Partsmodel(req.body)
       return blogs.save()

}

module.exports={
    Getallblogs,
    Createblogs
}