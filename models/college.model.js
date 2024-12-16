const mongoose = require('mongoose');

const collegeDetailsSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Institute",
        required: true
    },
    university: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    degreeType: {
        type: String,
        enums: ["bachelor's", "Master's"],
        required: true
    },
    courses: [String],
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('collegeDetails', collegeDetailsSchema)