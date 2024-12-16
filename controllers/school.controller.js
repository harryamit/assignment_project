const { errorResponse, successResponse } = require('../helper/utils');
const Message = require('../helper/message.json');
const SchoolDetails = require('../models/school.model');
const Institute = require('../models/institute.model')


exports.create = async (req, res) => {
    try {
        const { instituteId, board, medium, standards, subjects, name } = req.body;
        if (!instituteId || !board || !medium || !standards || !subjects || !name) {
            errorResponse(res, 400, Message.validation.REQUIRED_FIELDS, "Fields 'instituteId', 'name', 'board' 'medium', 'type', and 'subjects' are required.")
        };
        const institute = await Institute.findById(instituteId)
        if (!institute) {
            errorResponse(res, 404, Message.INSTITUTE.NOT_FOUND)
        }

        const newSchool  = new SchoolDetails({
            instituteId,
            board,
            medium,
            standards,
            subjects,
            name
        })

        await newSchool.save();

        successResponse(res, 201, Message.SCHOOL.CREATE_SUCCESS, newSchool)
    } catch (error) {
        console.log("errors", error);
        errorResponse(res, 500, Message.server.INTERNAL_ERROR, error)
    }
}