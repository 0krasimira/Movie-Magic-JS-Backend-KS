const uniqid = require("uniqid")
const Movie = require("../models/Movie")


// const movies = [
//     {
//         id: uniqid(),
//         title: "The Mummy",
//         genre: "Horror, Adventure",
//         description: "The Mummy is a 1999 American action-adventure film written and directed by Stephen Sommers. It is a remake of the 1932 film of the same name, starring Brendan Fraser, Rachel Weisz, John Hannah and Arnold Vosloo in the title role as the reanimated mummy. The film follows adventurer Rick O'Connell as he travels to Hamunaptra, the City of the Dead, with a librarian and her older brother, where they accidentally awaken Imhotep, a cursed high priest with supernatural powers.",
//         poster: "https://upload.wikimedia.org/wikipedia/en/6/68/The_mummy.jpg",
//         director: "Stephen Sommers",
//         year: 1999,
//         rating: 9.7
//     },

//     {
//         id: uniqid(),
//         title: "The Blue Lagoon",
//         genre: "Adventure, Romance",
//         description: "The Blue Lagoon is a 1980 American dramatic coming-of-age romantic survival film directed by Randal Kleiser from a screenplay written by Douglas Day Stewart based on the 1908 novel of the same name by Henry De Vere Stacpoole. The film stars Brooke Shields and Christopher Atkins. The music score was composed by Basil Poledouris, and the cinematography was by Néstor Almendros.",
//         poster: "https://upload.wikimedia.org/wikipedia/en/3/32/Blue_lagoon_1980_movie_poster.jpg",
//         director: "Randal Kleiser",
//         year: 1980,
//         rating: 8.3
//     },

//     {
//         id: uniqid(),
//         title: "The Bold And The Beautiful",
//         genre: "Soap Opera",
//         description: "The Bold and the Beautiful (often referred to as B&B) is an American television soap opera created by William J. Bell and Lee Phillip Bell for CBS. It premiered on March 23, 1987, as a sister show to the Bells' other soap opera The Young and the Restless; several characters from each of the two shows have crossed over to the other since the early 1990s. Set in Los Angeles, California, the show centers upon the Forrester family and their haute couture business.",
//         poster: "https://i.scdn.co/image/ab67616d0000b273801f1a7ab9431179fe8ab39b",
//         director: "	Michael Stich",
//         year: 1987,
//         rating: 10.0
//     },
// ]

exports.getAll = () => Movie.find()

//TODO: Filter result in  MONGODB
exports.search = async (title, genre, year) => {

    let result = await Movie.find().lean()

    if(title){
        result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
    }

    if(genre){
        result = result.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()))
    }

    if(year){
        result = result.filter(movie => movie.year == Number(year))
    }

    return result

}



exports.createMovies = (movieData) => Movie.create(movieData)

 
exports.getOne = (movieId) => Movie.findById(movieId)



