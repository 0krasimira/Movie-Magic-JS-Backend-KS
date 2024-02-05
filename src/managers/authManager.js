const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require("../lib/jwt")

const SECRET = 'dfngkbkncndklgrfmmnbxlfjlmlkbnxzszvbcnnvc'

exports.register = (userData) => User.create(userData)

exports.login = async (email, password) => {
    //get user from db
    const user = await User.findOne({email})

    // check if user exists
    if(!user) {
        throw new Error("Cannot find email or password")
    }

    //check if password is valid
    const isValid = await bcrypt.compare(password, user.password)

    if(!isValid){
        throw new Error("Cannot find email or password")
    }

    //generate JTW token (npm i jsonwebtoken)
    const payload = {
        _id: user._id,
        email: user.email
    }
    const token = await jwt.sign(payload, SECRET, {expiresIn: "2h"})

    //return token
    return token
}