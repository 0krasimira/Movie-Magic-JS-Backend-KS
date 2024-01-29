const castRouter = require("express").Router()

castRouter.get("/cast/create", (req, res) => {
    res.render("cast-create")
})

module.exports = castRouter