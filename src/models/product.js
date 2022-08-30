'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaProduct = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active :{
        type: Boolean, 
        required:true, 
        default:true
    }
});

const modelProduct = mongoose.model('Product', schemaProduct);

module.exports = {
    schemaProduct,
    modelProduct
}