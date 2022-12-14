const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const booksSchema = new Schema({
    Author: {
        type: String, 
        required: true
    },
    Title: {
        type: String,
        required: true
    }
})//, //{timestamps: true});


const books = mongoose.model('books',booksSchema);


module.exports = books;
