const express = require('express');
const router = express.Router();
const collegeRouter = require('../controllers/college.controller');

router.post('/create', collegeRouter.create);

module.exports = router;