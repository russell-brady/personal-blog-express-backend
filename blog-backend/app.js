const express = require('express')
const mongoose = require('mongoose');
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(require('./routes/crud.js'))

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("This is the root route...")
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
    console.log("Server is up and running...")
})

module.exports = app;