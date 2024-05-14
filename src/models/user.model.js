import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"


const DBconnectin= new Schema({
    Name:{
        type: String,
        required:[true,"Name is required"],
        unique:[true,"Name is unique"]

    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email is unique"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        unique:[true,"password is unique"]
    },
    Phone:{
        type:Number,
    },
    comments:{
        type:String,
        required:[true,"comments are required"],
    },
    service:{
        type:String,
        required:[true,"Service is required"],
    }
},{timestamps:true})


// this is password decryptions.
DBconnectin.pre("save",async function(){ //arrow function is not used becuse this. is not in arrow function.
    if (!this.isModified("password")) return next() // isModified checked modification.
    const bcrputPassword= bcryptjs.hash(this.password, "10")
    next()
})
 DBconnectin.methods.isCorrectPassword= async function(password){
    return await bcryptjs.compare(password, bcrputPassword)
    
 }

const User= mongoose.Model("Users",DBconnectin)
export default User;