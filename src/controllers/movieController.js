
const movieRouter = require("express").Router()


movieRouter.get("/create", (req, res) => {
    res.render("create")
})

movieRouter.get('/search', (req, res) => {
    res.render('search')
})

module.exports = movieRouter