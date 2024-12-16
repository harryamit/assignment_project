const { errorResponse, successResponse } = require('../helper/utils');
const Message = require('../helper/message.json');
const playhouse = require('../models/playhouse.model');
const Institute = require('../models/institute.model')


exports.create = async (req, res) => {
    try {
        const { instituteId, ageGroups, activities, name } = req.body;
        if (!instituteId || !ageGroups ||!activities ||!name) {
            errorResponse(res, 400, Message.validation.REQUIRED_FIELDS, "Fields 'instituteId', ageGroups and 'activities' are required.")
        };
        const institute = await Institute.findById(instituteId)
        if (!institute) {
            errorResponse(res, 404, Message.INSTITUTE.NOT_FOUND)
        }

        const newPlayhouse  = new playhouse({
            instituteId,
            ageGroups,
            name,
            activities
        })

        await newPlayhouse.save();

        successResponse(res, 201, Message.SCHOOL.CREATE_SUCCESS, newPlayhouse)
    } catch (error) {
        console.log("errors", error);
        errorResponse(res, 500, Message.server.INTERNAL_ERROR, error)
    }
}