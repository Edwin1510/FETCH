const mongoose=require("mongoose");

const partsSchema=mongoose.Schema({
    blogName:{
        type:String,
        required:true,
    },

    blogCategory:{
            type:String,
            required:true,
    },
blogDetails:{
        type:String,
        required:true,
}

})

const Partsmodel=mongoose.model("parts",partsSchema)


module.exports=Partsmodel;