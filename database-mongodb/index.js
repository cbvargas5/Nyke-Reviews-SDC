const mongoose = require('mongoose');
const productSchema = require('./schema');
const colors = require('colors');

// const mongo = require('mongodb');

// const url = 'mongodb://localhost/NykeReviews'

// const db = mongo.connect(url, () => console.log('Connected to MongoDB'.cyan))


mongoose.connect('mongodb://localhost/NykeReviews', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DATABASE ON'.cyan);
});

var Product = mongoose.model('Product', productSchema);

module.exports = {
    Product: Product,
    db: db
};
// module.exports = db