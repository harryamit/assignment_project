const express = require('express');
const router = express.Router();
const UserRouter = require('../controllers/user.controller');

router.post('/create', UserRouter.create);

module.exports = router;