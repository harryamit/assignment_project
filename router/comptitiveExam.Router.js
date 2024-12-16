const express = require('express');
const router = express.Router();
const CompetitveExamRouter = require('../controllers/competitiveExam.controller');

router.post('/create', CompetitveExamRouter.create);

module.exports = router;