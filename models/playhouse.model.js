const mongoose = require("mongoose")

const playhouseSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    ageGroups: [String], // E.g., ['1-2 years', '2-3 years', '3-4 years']
    activities: [String], // E.g., ['Drawing', 'Crafting', 'Music']
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('PlayhouseDetails', playhouseSchema);
