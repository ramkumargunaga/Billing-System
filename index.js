const express = require('express');
require('dotenv').config();
require('./Adopter/dbConnection')
const courseRoutes = require('./Routes/course.routes');
const studentRoutes = require('./Routes/student.routes')
const cors = require('cors')


let PORT = process.env.PORT

let app = express()
app.use(express.json())     //excepts req in json format


//course routes
app.use("/api/course",courseRoutes)

//student route
app.use("/api/student",studentRoutes)


app.use(cors())

//page not found
app.use("*",(req,res,next)=>
{
    res.status(404).json({error:true, message:"Page not found"})
})


//error handling middleware
app.use((err,req,res,next)=>
{
    res.status(400).json({error:true, message:err.message} )
})

//server Creation
app.listen(PORT, ()=>
{
    console.log(`server is running in port ${PORT}`)
})