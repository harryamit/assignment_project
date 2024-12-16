const mongoose = require('mongoose');


const institudeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enums:["Playhouse", "School", "College", "Competitive Exam Center"],
        required: true
    },
    details:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Institute", institudeSchema)