const exercise = require('../models/exerciseModel');
const mongoose = require('mongoose');

const createExercise = async (req, res) => {
    const exerciseBody = req.body;
    try {
        const newExercise = new exercise(exerciseBody);
        await newExercise.save();
        res.json(newExercise);
    } catch(err) {
        return res.status(500).json({"error": err})
    }
}

const getAllUserExercises = async (req, res) => {
    const user = req.body.user;
    try {
        const exercises = await exercise.find({user: user});
        return res.json(exercises);
    } catch (err) {
        return res.status(500).json({"error": err})
    }
}

module.exports = {createExercise, getAllUserExercises};
