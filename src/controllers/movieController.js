
const movieRouter = require("express").Router()
const movieManager = require("../managers/movieManager")
const uniqid = require("uniqid")

movieRouter.get("/create", (req, res) => {
    res.render("create")
})

movieRouter.post("/movies/create", (req, res) => {
    
    console.log(req.body)
    const {id, title, genre, description, imageUrl, director, year, rating} = req.body
    
    const newMovie = movieManager.createMovies(req.body)

    res.redirect('/')
})

movieRouter.get('/movies/:movieId/details', (req, res) => {
    const movieId = req.params.movieId
    let movie = movieManager.getOne(movieId)
    res.render('details', {movie})
})

movieRouter.get('/search', (req, res) => {
    res.render('search')
})

module.exports = movieRouter