const express = require('express');
const product = express.Router();

const productController = require('../controllers/product');

product.post("/createProducts", productController.createProducts);

product.get("/getProducts", productController.getProducts);

product.get("/getProduct/:id", productController.getProductById);

product.put("/updateProduct/:id", productController.updateProduct);

product.delete("/deleteProduct/:id",productController.delete);

module.exports = product;

