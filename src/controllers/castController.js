const castRouter = require("express").Router()

castRouter.get("/create", (req, res) => {
    res.render("cast/create")
})

module.exports = castRouter