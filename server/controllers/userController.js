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
        if(err === UserNotFound)
            return res.status(404).json({"error": err});
        return res.status(500).json({"error": err})
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
        if(err === UserAlreadyExists)
            return res.status(409).json({"error": err});
        return res.status(500).json({"error": err})
    }
}

module.exports = {getUser, createUser};