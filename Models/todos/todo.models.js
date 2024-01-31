import mongoose from "mongoose"


const todoSchema= new mongoose.Schema({
  content:{
    type:String,
    required: true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdby:{
    //yha pe hume user ka reference chiye
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodo:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"subtodo"
    }
  ]//array of subtodos

  
},{timestamps: true})

export const todo= mongoose.model("todo",todoSchema)