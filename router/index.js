// router/index.js
const express = require('express');
const router = express.Router();


const instituteRouter = require('./institute.router');
const SchoolRouter = require('./school.router');
const CollegeRouter = require('./college.router');
const competitiveExamRouter = require('./comptitiveExam.Router');
const PlayhouseRouter = require('./playhouse.router');
const UserRouter = require('./user.router');

// Use routes
router.use('/institute', instituteRouter);
router.use('/school', SchoolRouter);
router.use('/college', CollegeRouter);
router.use('/comptetitveExam', competitiveExamRouter);
router.use('/user', UserRouter);

module.exports = router;
