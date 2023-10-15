import { Schema, model } from "mongoose";

const BookSchema = new Schema ({
    title: { type: String, },
    author: { type: String },
    isbn: { type: String },
    image: {type: String},
    created_at: { type: Date, default: Date.now }
}, {
    versionKey: false
});

export default model('Book', BookSchema);
