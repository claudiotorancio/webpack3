
const { Schema, model } = require("mongoose")

const BookSchema = new Schema ({
    title: {type: String},
    author: {type: String},
    isbn:{type: String}
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Book', BookSchema)