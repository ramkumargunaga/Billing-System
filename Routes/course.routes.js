const express = require('express');
const {createCourse,getAllCourses} = require('../Controller/course.controller')


let router = express.Router()

router.post("/addcourse",createCourse)
router.get("/fetchallcourses",getAllCourses)


module.exports = router