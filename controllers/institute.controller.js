const {errorResponse, successResponse} = require('../helper/utils');
const Message = require('../helper/message.json');
const Institute = require('../models/institute.model')


exports.createInstitute = async( req, res)=>{
    try {
        const {name, type, details} = req.body;

        if(!name || !type || !details){
            errorResponse(res, 400, Message.validation.REQUIRED_FIELDS,"Required Fields Name, Type and Details are missing" );
        };
        const newInstitute = new Institute({name, type, details})

        await newInstitute.save();

        successResponse(res, 201, Message.INSTITUTE.CREATE_SUCCESS)
    } catch (error) {
        console.log("errors", error);
        errorResponse( res, 500, Message.server.INTERNAL_ERROR, error)
    }
}
exports.list = async( req, res)=>{
    try {
        const listInstitute = await Institute.find();

        successResponse(res, 200, Message.INSTITUTE.CREATE_SUCCESS, listInstitute)
    } catch (error) {
        console.log("errors", error);
        errorResponse( res, 500, Message.server.INTERNAL_ERROR, error)
    }
}