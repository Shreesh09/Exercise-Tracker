const mongoose = require('mongoose');
const {models} = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    thoughts: {
        type: String,
    },
    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
});

const exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = exercise;