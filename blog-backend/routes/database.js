const mongoose = require('mongoose');

const dbRoute = 'mongodb+srv://russell:samsung97@cluster-iwqaq.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
});

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function getConnection() {
    return mongoose;
}

module.exports = {
    getConnection: getConnection
}