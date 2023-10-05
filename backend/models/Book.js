
const { Schema, model } = require("mongoose")

const BookSchema = new Schema ({
    title: {type: String},
    author: {type: String},
    isbn:{type: String},
    created_at: {type: Date, default:Date.now}
},{
    versionKey: false
});

module.exports = model('Book', BookSchema)