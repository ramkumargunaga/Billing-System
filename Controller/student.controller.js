
var Student=require('../Models/student.model')


let createStudent = async (req,res,next)=>
{
    try{
        let{fullName,email,gender,mobileNo} = req.body
        console.log(fullName, email)

        let isStudentAvailable = await Student.findOne({email})
        console.log(fullName, email)
        

        if(isStudentAvailable){
            return res.status(500).json({error:true,message:"student with given email already available"})
        }

        let newStudent = await Student.create({fullName,email,gender,mobileNo})

        return res.status(200).json({error:false,message:"Student created successfully", data:newStudent})

    }
    catch(err){
        next(err)
    }
}


module.exports = {
    createStudent
}