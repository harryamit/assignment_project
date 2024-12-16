const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (v) => /^\S+@\S+\.\S+$/.test(v), // Basic email validation
            message: props => `${props.value} is not a valid email address!`
        }
    },
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'instituteType', // Dynamically references the correct type
        required: true,
    },
    instituteType: {
        type: String,
        enum: ['College', 'School', 'Playhouse', 'CompetitiveExamCenter'],
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0, // Ensure age is non-negative
    },
    mobile_no: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (v) => /^\d{10}$/.test(v), // Simple mobile number validation (10 digits)
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);
