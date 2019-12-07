const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let products = new Schema({
    productId: { type: Number },
    name: { type: String, required: true },
    type: { type: String },
    sku: { type: String },
    description: { type: String },
    weight: { type: Number },
    width: { type: Number },
    depth: { type: Number },
    height: { type: Number },
    price: { type: Number },
    costPrice: { type: Number },
    categories: [],
    retailPrice: { type: Number },
    salePrice: { type: Number },
    mapPrice: { type: Number },
    taxClassId: { type: Number },
    productTaxCode: { type: String },
    calculatedPrice: { type: Number },
    inventoryLevel: { type: Number },
    inventoryWarningLevel: { type: Number },
    inventoryTracking: { type: String }
});

module.exports = mongoose.model('products', products);



