import mongoose from "mongoose"

const userschema=new mongoose.Schema({
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
    required:true,
    unique:true,
    lowercase:true
  }
},{timestapms:true})

export const User=mongoose.model("User",userschema)