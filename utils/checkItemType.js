import Book from '../models/bookModel.js';
import Movie from '../models/movieModel.js';

const checkItemType = (itemType) => {
  if (itemType == 'books') {
    return Book;
  } else if (itemType == 'movies') {
    return Movie;
  }
};

export default checkItemType;
