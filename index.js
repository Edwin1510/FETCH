const express=require("express")

const Appserver=express();
const bodyparser=require("body-parser")
const dotenv=require("dotenv")
Appserver.use(bodyparser.json());
Appserver.set("view engine","ejs")
Appserver.use(express.static("public"))
dotenv.config()
console.log(process.env)

const hostname= process.env.NODE_ENV === "development"
? "localhost"
: process.env.PROD_SERVER_HOSTNAME;
const port=process.env.NODE_ENV === "development" ? 3000 : process.env.PORT;

Appserver.use("/api",require("./Api"))




Appserver.get("/",(req,res)=>{
  res.render("pages/index")
})



Appserver.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}/happily`);
})