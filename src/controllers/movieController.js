
const movieRouter = require("express").Router()
const movieManager = require("../managers/movieManager")
const uniqid = require("uniqid")

movieRouter.get("/create", (req, res) => {
    res.render("create")
})

movieRouter.post("/movies/create", async (req, res) => {
    
    try {
        await movieManager.createMovies(req.body)
        res.redirect('/')
    } catch (error) {
        console.log(error.message)
        res.redirect("/create")
    }
    
})

movieRouter.get('/movies/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId
    let movie = await movieManager.getOne(movieId).lean()
    res.render('details', {movie})
})

movieRouter.get('/search', (req, res) => {
    const {title, genre, year} = req.query
    const movies = movieManager.search(title, genre, year)
    res.render('search', {movies, title, genre, year})
})

movieRouter.get('/movies/:movieId/attach', (req, res) => {
    res.render('movie/attach')
})

module.exports = movieRouter