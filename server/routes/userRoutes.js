const express = require('express');
const {getUser, createUser} = require('../controllers/userController');

const router = express.Router();

router.post('/user', createUser);
router.get('/user', getUser);

module.exports = router;