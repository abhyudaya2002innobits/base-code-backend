import mongoose,{Schema} from "mongoose";
const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        // index is true to optimize the searching
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
        // unique:true,
        // lowercase:true,
        // trim:true

    },
    refreshToken:{
        type:String
    }

},{timestamps:true})
export const User=mongoose.model("User",userSchema)
