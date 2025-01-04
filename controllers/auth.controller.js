const User = require("../models/users.model.js");

const signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({status:'success', data : { user : newUser}})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

module.exports = { signup }