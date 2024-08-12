const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const loginModel=require("./models/admin")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://shanibatm17:shaniba17tm@cluster0.h4a3e.mongodb.net/hospitaldb?retryWrites=true&w=majority&appName=Cluster0")
app.get("/test",(req,res)=>
{
    res.json({"status":"success"})
})

app.post("/adminsignup",(req,res)=>{
    let input=req.body
    let hashedPassword=bcrypt.hashSync(input.password,10)
    //console.log(hashedPassword)
    input.password=hashedPassword
    console.log(input)
    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})
})

app.listen(3030,()=>{
    console.log("server started")
})




