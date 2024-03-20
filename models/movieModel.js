import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please specify a movie title"],
  },
  description: {
    type: String,
    required: [true, "Please give a description of the movie"],
  },
  director: String,
  genre: String,
  releaseYear: Number,
  runtime: String,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
