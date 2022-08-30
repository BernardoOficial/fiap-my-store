const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.getProduct = async () => {
    const product = await Product.find({}, 'title price _id active');
    return product;
}

exports.createProduct = async (data) => {
    const product = await Product(data);
    return product.save();
}

exports.putProduct = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            active: data.active
        }
    });
}

exports.getById = async (id) => {
    return await Product.findOne({ _id: id }, "_id title description price active");
}

exports.deleteProduct = async (id) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            active: false
        }
    });
}