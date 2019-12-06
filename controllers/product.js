const axios = require('axios');
const products = require('../models/product');
let config = {
    headers: {
        "Content-Type": "application/json",
        "X-Auth-Client": "eydugrs3jiqhmcphcjfcez2alk65ww5",
        "X-Auth-Token": "kq3nx416m1rdv88hgjiwj1dlqklawko"
    }
}


exports.createProducts = (req, res) => {
    productsArray = []
    axios.get('https://api.bigcommerce.com/stores/81wumtsb9/v3/catalog/products', config)
        .then((data) => {
            let productsData = data.data.data
            for (let i = 0; i < productsData.length; i++) {
                let product = {
                    productId: productsData[i].id,
                    name: productsData[i].name,
                    type: productsData[i].type,
                    sku: productsData[i].sku,
                    description: productsData[i].description,
                    weight: productsData[i].weight,
                    width: productsData[i].width,
                    depth: productsData[i].depth,
                    height: productsData[i].height,
                    price: productsData[i].price,
                    costPrice: productsData[i].cost_price,
                    retailPrice: productsData[i].retail_price,
                    salePrice: productsData[i].sale_price,
                    mapPrice: productsData[i].map_price,
                    taxClassId: productsData[i].tax_class_id,
                    productTaxCode: productsData[i].product_tax_code,
                    calculatedPrice: productsData[i].calculated_price,
                    inventoryLevel: productsData[i].inventory_level,
                    inventoryWarningLevel: productsData[i].inventory_warning_level,
                    inventoryTracking: productsData[i].inventory_tracking
                }
                productsArray.push(product);
            }
            products.insertMany(productsArray)
                .then((data) => {
                    return res.send("Products Created");
                }).catch((err) => {
                    return res.send(err);
                })
        }).catch((err) => {
            return res.send(err);
        })
}

exports.getProducts = (req, res) => {
    products.find()
        .then((result) => {
            return res.json(result);
        }).catch((err) => {
            return res.send(err);
        })
}

exports.getProductById = (req, res) => {
    products.findOne({ productId: req.params.id }, (data, err) => {
        if (data) {
            return res.json(data)
        }
        else {
            return res.send(err);
        }
    })

}


exports.update = (req, res) => {
    axios.put('https://api.bigcommerce.com/stores/81wumtsb9/v3/catalog/products/' + req.params.id, req.body, config)
        .then((data) => {
            return res.send("Product Updated");
        }).catch((err) => {
            return res.send(err);
        })

}

exports.delete = (req, res) => {
    products.findOneAndRemove({ productId: req.params.id }, (err, success) => {
        if (success) {
            return res.send("Delete Product Successfully")
        } else {
            return res.send(err)
        }
    })
}

exports.create = (req, res) => {
    let product = new products({
        productId: req.body.productId,
        name: req.body.name,
        type: req.body.type,
        sku: req.body.sku,
        description: req.body.description,
        weight: req.body.weight,
        width: req.body.width,
        depth: req.body.depth,
        height: req.body.height,
        price: req.body.price,
        costPrice: req.body.costPrice,
        retailPrice: req.body.retailPrice,
        salePrice: req.body.salePrice,
        mapPrice: req.body.mapPrice,
        taxClassId: req.body.taxClassId,
        productTaxCode: req.body.productTaxCode,
        calculatedPrice: req.body.calculatedPrice,
        inventoryLevel: req.body.inventoryLevel,
        inventoryWarningLevel: req.body.inventoryWarningLevel,
        inventoryTracking: req.body.inventoryTracking
    })
    product.save((err, success) => {
        if (success) {
            return res.send("Product Created successfully");
        }
        return res.send(err);
    })

}






