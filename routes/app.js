require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use("/blogs", require('./blogs/blogs.js'))

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("This is the root route...")
})

module.exports = app;