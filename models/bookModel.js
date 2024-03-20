import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please specify a book title"],
  },
  author: {
    type: String,
    required: [true, "Please name the book's author"],
  },
  description: {
    type: String,
    required: [true, "Please give a description of the book"],
  },
  genre: String,
  publishYear: Number,
});

bookSchema.pre("save", function (next) {
  console.log("Saving database entry...");
  next();
});

bookSchema.post("save", function (doc, next) {
  console.log("Database entry saved! \n", doc);
  next();
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
