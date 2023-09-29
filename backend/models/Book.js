
const { Schema, model } = require("mongoose")

const BookSchema = new Schema ({
    title: {type: String},
    author: {type: String},
    isbn:{type: String},
    imagePath: {type: String},
    created_at: {type: Date, default:Date.now}
});

module.exports = model('Book', BookSchema)