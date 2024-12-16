const { errorResponse, successResponse } = require('../helper/utils');
const Message = require('../helper/message.json');
const collegeDetails = require('../models/college.model');
const Institute = require('../models/institute.model')


exports.create = async (req, res) => {
    try {
        const { instituteId, university, degreeType, courses } = req.body;
        if (!instituteId || !university ||!name|| !degreeType || !courses) {
            errorResponse(res, 400, Message.validation.REQUIRED_FIELDS, "Fields 'instituteId', 'university' 'degreeType' and 'courses' are required.")
        };
        const institute = await Institute.findById(instituteId)
        if (!institute) {
            errorResponse(res, 404, Message.INSTITUTE.NOT_FOUND)
        }

        const newCollege  = new collegeDetails({
            instituteId,
            university,
            name,
            degreeType,
            courses
        })

        await newCollege.save();

        successResponse(res, 201, Message.SCHOOL.CREATE_SUCCESS, newCollege)
    } catch (error) {
        console.log("errors", error);
        errorResponse(res, 500, Message.server.INTERNAL_ERROR, error)
    }
}