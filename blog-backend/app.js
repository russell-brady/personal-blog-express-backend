const express = require('express')
const mongoose = require('mongoose');
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const dbRoute = 'mongodb+srv://russell:samsung97@cluster-iwqaq.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("This is the root route...")
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
    console.log("Server is up and running...")
})

module.exports = app;