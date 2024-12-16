const { errorResponse, successResponse } = require('../helper/utils');
const Message = require('../helper/message.json');
const collegeDetails = require('../models/college.model');
const competitiveExam = require('../models/competitiveExamCenter.mode');
const playhouse = require('../models/playhouse.model');
const SchoolDetails = require('../models/school.model');
const User = require('../models/user.model')



exports.create = async (req, res) => {
    try {
    const { name, email, instituteId, instituteType, age, mobile_no } = req.body;
    if (!name || !email || !instituteId|| !instituteType|| !age|| !mobile_no ){
        errorResponse(res, 400, Message.validation.REQUIRED_FIELDS, "Fields 'name',email', 'instituteId, 'instituteType', 'age' and 'examTypes' are required.")
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: `${email} is not a valid email address!` });
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile_no)) {
        return res.status(400).json({ message: `${mobile_no} is not a valid mobile number!` });
    }
    const user = new User({
        name,
        email,
        instituteId,
        instituteType,
        age,
        mobile_no,
    });

    // Save the user to the database
    await user.save();

    successResponse(res, 201, Message.SCHOOL.CREATE_SUCCESS, user)

    } catch (error) {
        console.log("errors", error);
        errorResponse(res, 500, Message.server.INTERNAL_ERROR, error)
    }
}