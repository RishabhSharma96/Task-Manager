const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    Name:{
        type:String,
        trim:true,
        uppercase:true
    },
    TaskName:{
        type:String,
        trim:true,
        required:true
    },
    TaskDescription:{
        type:String,
        trim:true,
        required:true
    },
    IsCompleted:{
        type:Boolean,
        default:false
    }
})

const taskModel = new mongoose.model('taskModel',taskSchema)

module.exports = taskModel