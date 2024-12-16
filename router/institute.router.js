const express = require('express');
const router = express.Router();
const instituteRouter = require('../controllers/institute.controller');

router.post('/create', instituteRouter.createInstitute);
router.get('/listing', instituteRouter.list);

module.exports = router;