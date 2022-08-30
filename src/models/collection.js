'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { schemaProduct } = require("../models/product");

const schemaCollection = new Schema({
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
    products: [schemaProduct],
    active: {
        type: Boolean, 
        required:true, 
        default:true
    }
});

module.exports = mongoose.model('Collection', schemaCollection);