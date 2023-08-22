const user = require('../models/userModel');
const UserNotFound = "User Not Found";
const UserAlreadyExists = "User Already Exists";

const getUser = async (req, res) => {
    const username = req.body.username;

    try {
        const getUser = await user.findOne({username: username});
        if(!getUser)
            throw UserNotFound;
        return res.json(getUser);
    } catch (err)
    {
        const error = err === UserNotFound || "Server Error";
        return res.json({"error": error});
    }
}

const createUser = async (req, res) => {
    const username = req.body.username;

    try {
        const getUser = await user.findOne({username: username});
        if(getUser)
            throw UserAlreadyExists;
        const newUser = new user({
            username: username,
        });
        await newUser.save();
        res.json(newUser);
    } catch (err)
    {
        const error = err === UserAlreadyExists || "Server Error";
        return res.json({"error": error});
    }
}

module.exports = {getUser, createUser};