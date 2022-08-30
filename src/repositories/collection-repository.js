const mongoose = require('mongoose');
const Collection = mongoose.model('Collection');

exports.getCollection = async () => {
    const collection = await Collection.find({}, '_id title description products active');
    return collection;
}

exports.createCollection = async (data) => {
    const collection = await Collection(data);
    return collection.save();
}

exports.putCollection = async (id, data) => {
    await Collection.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            active: data.active
        }
    });
}

exports.getById = async (id) => {
    return await Collection.findOne({ _id: id }, "_id title description products active");
}

exports.deleteCollection = async (id) => {
    await Collection.findByIdAndUpdate(id, {
        $set: {
            active: false
        }
    });
}