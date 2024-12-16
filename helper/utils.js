// utils/helper.js

const successResponse = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };
  
  const errorResponse = (res, statusCode, message, errors = null) => {
    res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  };
  
  module.exports = {
    successResponse,
    errorResponse,
  };
  