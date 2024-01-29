const castRouter = require("express").Router()

castRouter.get("/create", (req, res) => {
    res.render("cast/create")
})

castRouter.post("/create", (req, res) => {
    const body = req.body
console.log(body)
    res.redirect("/")
})


module.exports = castRouter