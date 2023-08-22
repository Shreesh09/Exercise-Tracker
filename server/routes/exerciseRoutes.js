const express = require('express');
const {createExercise, getAllUserExercises} = require('../controllers/exerciseController');

const router = express.Router();

router.post('/exercise', createExercise);
router.get('/exercise', getAllUserExercises);

module.exports = router;