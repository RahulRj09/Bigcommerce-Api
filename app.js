const express = require('express');
const app = express();

const mongoose = require('mongoose');

let connectionUrl = 'mongodb://localhost:27017/bigcommerce';
let mongoDB = process.env.MONGODB_URI || connectionUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json())

const product = require('./routes/product');

app.use("/product", product);

app.listen(3000);