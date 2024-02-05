
const movieRouter = require("express").Router()
const movieManager = require("../managers/movieManager")
const castManager = require("../managers/castManager")
const {isAuth} = require("../middlewares/authMiddleware")
const router = require("./homeController")

movieRouter.get("/create", isAuth, (req, res) => {
    res.render("create")
})

movieRouter.post("/movies/create", isAuth, async (req, res) => {
    
    try {
        await movieManager.createMovies(req.body)
        res.redirect('/')
    } catch (error) {
        console.log(error.message)
        res.redirect("/create")
    }
    
})

movieRouter.get('/movies/:movieId/details', async (req, res) => {
    try{
        const movieId = req.params.movieId
    let movie = await movieManager.getOne(movieId).lean()
    // const casts = await castManager.getByIds(movie.casts).lean() ===> only if populate is not used - populate populates the cast info into the movie with the ref: Cast in the Movie Schema
    res.render('details', {movie})
    } catch (error) {
        console.log(error.message)
        res.redirect("/")
    }
    
})

movieRouter.get('/search', async (req, res) => {
    try{
    const {title, genre, year} = req.query
    const movies = await movieManager.search(title, genre, year).lean()
    res.render('search', {movies, title, genre, year})
    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
    
})

movieRouter.get('/movies/:movieId/attach', isAuth, async (req, res) => {
    try{
        const movie = await movieManager.getOne(req.params.movieId).lean()
        const casts = await castManager.getAll().lean()
        res.render('movie/attach', {...movie, casts})
    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
    
})

movieRouter.post('/movies/:movieId/attach', isAuth, async (req, res) => {
    try{
        const castId = req.body.cast
        await movieManager.attach(req.params.movieId, castId)
        res.redirect(`/movies/${req.params.movieId}/attach`) // /movies/:movieId/attach
    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
    
})


movieRouter.get("/movies/:movieId/edit", isAuth, async (req, res) => {
    if(!req.user){
        return res.redirect('/auth/login')
    }
    const movie = await movieManager.getOne(req.params.movieId).lean()
    res.render(`movie/edit`, {movie})
})
module.exports = movieRouter