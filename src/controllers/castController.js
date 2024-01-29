const castRouter = require("express").Router()

const castManager = require("../managers/castManager")

castRouter.get("/create", (req, res) => {
    res.render("cast/create")
})

castRouter.post("/create", async (req, res) => {
    const castData = req.body
    await castManager.create(castData)
    res.redirect("/")
})


module.exports = castRouter