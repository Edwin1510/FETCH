const mongoose=require("mongoose");


const ConnecttoDB=()=>{

 const DataURI=   process.env.Node_environment === "development" ? "mongodb://localhost:27017/Bharat" :
 `mongodb+srv://${process.env.mONGODB__nAME}:${process.env.mONGODB__pASSWORD}@sam.ltzmszw.mongodb.net/`;
    
    mongoose.connect(DataURI)
    .then((response)=>{
        console.log("Database connection successfully")
    }).catch((error)=>console.log(error))
}

module.exports=ConnecttoDB