const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{ type: String, required: true},
    description: {type: String, required: true },
    price: {type: Number, required: true},
    instock: {type: boolean, required: true}
});

module.exports = mongose.models('Product', productSchema);