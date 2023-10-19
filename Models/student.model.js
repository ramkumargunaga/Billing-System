const {Schema,model} = require('mongoose');
require('dotenv').config()

let studentSchema = new Schema({
    fullName:{
        type:String,
        required:[true,"Full Name is mandatory"]
    },
    email:{
        type:String,
        required:[true, "Email is mandatory"]
    },
    gender:{
        type:String,
        required:[true,"Gender is mandatory"]
    },
    mobileNo:{
        type:Number,
        maxLength:[10,"Enter a valid moblie number"],
        minLength:[10,"Enter a valid mobile number"],
        required:[true,"Mobile Number is Mandatory"]
    }
    // yearOfPassout:{
    //     type:Number,
    //     required:[true,"Year Of Passout is mandatory"]
    // }
},{timestamps:true})

module.export = new model("Student",studentSchema)