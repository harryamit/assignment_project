const mongoose = require('mongoose')

const examCenterSchema = new mongoose.Schema({
    instituteId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Institute', 
        required: true 
    },
    name: {
        type: String,
        required: true,
    },
    examTypes: [String], // e.g., ['UPSC', 'SSC', 'JEE']
    createdAt: { 
        type: Date, 
        default: Date.now
    },
});

module.exports = mongoose.model('ExamCenter', examCenterSchema);
