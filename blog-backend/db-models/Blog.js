const mongoose = require('mongoose'); 

const { Schema } = mongoose; 

const BlogSchema = new Schema({
    title: String,
    body: String, 
    author: String,
}, {timestamps: true});