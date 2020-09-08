const mongoose = require('mongoose');
const Creator = require('./creator');

// Create TODO Schema 

const TODO_schema = new mongoose.Schema({
    task_name:{
        type:String,
        required:true,
        minLength:1
    },
    task_description:{
        type:String,
        required:true,
        minlength:3,
        maxlength:80
    },
    creator:Creator.Schema,
    duration:{
        type:Number,
        required:true,
    },
    created_at :
     { type: Date, 
       required: true, 
       default: Date.now 
    }
});


module.exports = new momgoose.model('TODO',TODO_schema);