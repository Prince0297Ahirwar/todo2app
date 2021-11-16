const mongoose = require('mongoose');

//creating schema

const taskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },

        category:{
            type:String,
            required:true
        },
        dueDate:{
            type:String
        }
    }
);

//creating model mongoose.model(modelName, schema):
const Task = mongoose.model('Task',taskSchema);

module.exports = Task;