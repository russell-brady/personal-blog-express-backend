const mongoose = require('mongoose');

const dbRoute = process.env.DATABASE_URL;

// connects our back end code with the database
function connect() {
    mongoose.connect(dbRoute, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10,
        useFindAndModify: false
    });
    let db = mongoose.connection;
    db.once('open', () => console.log('connected to the database'));
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

function getConnection() {
    return mongoose;
}

module.exports = {
    getConnection: getConnection,
    connect: connect
}