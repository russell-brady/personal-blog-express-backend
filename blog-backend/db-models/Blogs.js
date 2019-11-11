const mongoose = require('mongoose'); 
const database = require('../routes/database.js')

const { Schema } = mongoose; 
const ObjectId = Schema.ObjectId;

var BlogSchema = new Schema({
    id: ObjectId,
    title: String,
    body: String, 
    author: String,
    date: { type: Date, default: Date.now },
});

module.exports = database.getConnection().model('Blogs', BlogSchema);