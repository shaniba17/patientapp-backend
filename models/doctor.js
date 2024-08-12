const mongoose=require("mongoose")
const doctorSchema=mongoose.Schema(
   {
    name:String,
    qualification:String,
    specialisation:String,
    contact:String
   }
)
const doctorModel=mongoose.model("doctors",doctorSchema)
module.exports=doctorModel