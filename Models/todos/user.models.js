import mongoose from "mongoose"

//creating schema
const userSchema=new mongoose.Schema(
{

  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  
  password:{
    type:String,
    required:true,//[true,"password is required"],
    unique:true
  }

},{timestamps:true}
)

export const User= mongoose.model('User',userSchema)

