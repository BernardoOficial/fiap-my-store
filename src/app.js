const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bernardo:jxZcaAUNRHkJ48K0@cluster0.ol6ckjq.mongodb.net/test");

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token' )
    next();
});

require('./models/product');
require('./models/collection');

const productRouter = require('./routes/product-route');
const collectionRouter = require('./routes/collection-route');
const index = require('./routes/index')

app.use('/', index);
app.use('/products', productRouter);
app.use('/collections', collectionRouter);

module.exports = app