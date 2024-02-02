const authRouter = require("express").Router()

authRouter.get("/register", (req, res) => {
    res.render('auth/register')
})

module.exports = authRouter