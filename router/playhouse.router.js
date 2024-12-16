const express = require('express');
const router = express.Router();
const PlayhouseRouter = require('../controllers/playhouse.controller');

router.post('/create', PlayhouseRouter.create);

module.exports = router;