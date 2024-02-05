const authRouter = require("express").Router()
const authManager = require("../managers/authManager")

authRouter.get("/register", (req, res) => {
    res.render('auth/register')
})

authRouter.post("/register", async (req, res) => {
    const userData = req.body
    await authManager.register(userData)
    res.redirect("/auth/login")
})

authRouter.get("/login", async (req, res) => {
    res.render("auth/login")
})

module.exports = authRouter