const mongoose = require('mongoose');
const {models} = require("mongoose");

const userSchema = new mongoose.Schema({
    "username": {
        type: String,
        required: true,
        maxLength: 10,
        minLength: 1,
    }
});

const user = mongoose.model("User", userSchema);
module.exports = user;