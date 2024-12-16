const { errorResponse, successResponse } = require('../helper/utils');
const Message = require('../helper/message.json');
const competitiveExam = require('../models/competitiveExamCenter.mode');
const Institute = require('../models/institute.model')


exports.create = async (req, res) => {
    try {
        const { instituteId, examTypes } = req.body;
        if (!instituteId || !examTypes|| !name) {
            errorResponse(res, 400, Message.validation.REQUIRED_FIELDS, "Fields 'instituteId', 'name' and 'examTypes' are required.")
        };
        const institute = await Institute.findById(instituteId)
        if (!institute) {
            errorResponse(res, 404, Message.INSTITUTE.NOT_FOUND)
        }

        const newExam  = new competitiveExam({
            instituteId,
            name,
            examTypes
        })

        await newExam.save();

        successResponse(res, 201, Message.SCHOOL.CREATE_SUCCESS, newExam)
    } catch (error) {
        console.log("errors", error);
        errorResponse(res, 500, Message.server.INTERNAL_ERROR, error)
    }
}