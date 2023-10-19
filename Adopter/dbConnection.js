const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.URL).
then(()=>{
    console.log(`Mongodb connected successfully`)
}).
catch((error)=>
{
    console.log(error)
})
