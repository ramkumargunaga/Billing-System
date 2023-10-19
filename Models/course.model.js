const {Schema,model} = require('mongoose')
require('dotenv').config()


let courseSchema = new Schema({
    courseCode:{
        type:Number,
        required:true
    },
    courseName:{
        type:String,
        required:true
    },
    courseFees:{
        type:Number,
        required:true
    },
    courseIncharge:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=new model("Course", courseSchema)