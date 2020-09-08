const mongoose = require('mongoose')

// creator schema

const CreatorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    age:{
        type:Number,
        min:8,
        max:88
    }
});

module.exports=new mongoose.model('creator',CreatorSchema);