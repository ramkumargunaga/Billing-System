const express = require('express')
const { createStudent } = require('../Controller/student.controller')


let router = express.Router()

router.post("/addstudent",createStudent)


module.exports=router