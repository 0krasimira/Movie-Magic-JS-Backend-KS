const router = require("express").Router()
const movieManager = require("../managers/movieManager")
const movieRouter = require("./movieController")

    
router.get("/", (req, res) => {
    const {title, genre, year} = req.query
    const movies = movieManager.getAll(title, genre, year)
    res.render("home", {movies, title, genre, year})
})

router.get('/about', (req, res) => {
    res.render("about")
})

router.get('/404', (req, res) => {
    res.render('404')
})

router.use(movieRouter)

router.get("*", (req, res) => {
    res.status(404).render("404")
})

module.exports = router