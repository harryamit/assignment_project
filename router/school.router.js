const express = require('express');
const router = express.Router();
const SchoolRouter = require('../controllers/school.controller');

router.post('/create', SchoolRouter.create);

module.exports = router;