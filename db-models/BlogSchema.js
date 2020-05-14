const mongoose = require('mongoose'); 

const { Schema } = mongoose; 
const ObjectId = Schema.ObjectId;

var BlogSchema = new Schema({
    id: ObjectId,
    title: String,
    body: String, 
    author: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blogs', BlogSchema);