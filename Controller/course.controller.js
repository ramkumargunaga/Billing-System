const Course = require('../Models/course.model')

let createCourse = async (req,res,next)=>
{
    try{
        let{courseCode,courseName,courseFees,courseIncharge}=req.body

        let isCourseAvailable= await Course.findOne({courseName})
        if(isCourseAvailable){
            return res.status(500).json({error:true,message:"Course already available"})
        }

        let newCourse = await Course.create({courseCode,courseName,courseFees,courseIncharge})

        return res.status(200).json({error:false, message:"course created successfully"})
    }
    catch(err){
        next(err)
    }
}


let getAllCourses = async (req,res,next)=>
{
    try{
        let courses = await Course.find()
        if(!courses){
           return res.status(404).json({error:true, message:"no courses found"})
        }
        return res.status(200).json({error:true, message:"courses fetches successfully", data:courses})
    }
    catch(err){
        next(err)
    }
}

let updateCourse = async (req,res, next)=>
{
    try{
        

        let course = await Course.find()
    }
    catch(err){
        next(err)
    }
}



module.exports={
    createCourse,
    getAllCourses
}