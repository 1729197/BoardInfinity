const express = require('express')
const mongoose = require('mongoose')
const app=express()
require('dotenv').config()
const PORT =process.env.PORT || 300

// connect to mongodbatlas
mongoose.connect(
process.env.MONGO_URL,
{userNewUrlParser:true}
).then(() => {
    // connected
    console.log("connected to mongodb atlas") 
}).catch(error => {
    console.log("Something wrong happened",error);
})

app.listen(PORT,() => {
    console.log("server started at PORT",PORT)
})

