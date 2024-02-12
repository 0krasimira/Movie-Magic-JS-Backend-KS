const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        minLength: [5, 'Title should be at least 5 characters long.'],
        match: [/^[a-zA-Z0-9\s]+$/, 'Invalid title format']
    },
    genre: {
        type: String, 
        required: true,
        lowercase: true,
        minLength: [5, 'Genre should be at least 5 characters long.'],
        match: [/^[a-zA-Z0-9\s]+$/, 'Invalid genre format']
    },
    director: {
        type: String, 
        required: true,
        minLength: [5, 'Director name should be at least 5 characters long.'],
        match: [/^[a-zA-Z0-9\s]+$/, 'Invalid director name format']
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Year should not be earlier than 1900'],
        max: [2024, 'Year should not be later than 2024']
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Minimum rating is 1'],
        max: [10, 'Maximum rating is 10']
    },
    description: {
        type: String, 
        required: true,
        maxLength: [1000, 'Maximum characters exceeded - description cannot be longer than 1000 characters']
    },
    poster: {
        type: String, 
        required: true,
        match: [/^https?:\/\//, 'Invalid poster link']
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: "Cast"
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})




const Movie = mongoose.model("Movie", movieSchema)


module.exports = Movie