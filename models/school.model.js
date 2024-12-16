const mongoose = require('mongoose');

const schoolDetailsSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Institute",
        required: true
    },
    board: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    medium: {
        type: String,
        enums: ["Pre-primary", "Primary", "seconday", "Hgher Secondary"],
        required: true
    },
    standards: [String],
    subjects: [String],
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('SchoolDetails', schoolDetailsSchema)