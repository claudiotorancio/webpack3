const {unlink} = require('fs-extra')
const path = require('path')

const Book = require('../models/Book.js')

const renderAtBooks = async (req, res) => {
    const books = await Book.find()
    res.json(books)
}

const createBooks = async (req, res) => {
    try{
        const{title, author, isbn } = req.body;
        const imagePath = '/uploads/' + req.file.filename
        const newBook = new Book ({title, author, isbn, imagePath});
        await newBook.save();
        res.json({message:'Book saved'})
    } catch(error) {
        console.log(error)
    }
}

const deleteBooks = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    unlink(path.resolve('/public' + book.imagePath))
    res.json({message:'Book deleted'})
}

module.exports = {
    renderAtBooks,
    createBooks,
    deleteBooks
}