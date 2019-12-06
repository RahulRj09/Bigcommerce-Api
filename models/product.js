const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let products = new Schema({
    productId: { type: Number, required: true },
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
    retailPrice: { type: Number },
    salePrice: { type: Number },
    mapPrice: { type: Number },
    taxClassId: { type: Number },
    productTaxCode: { type: Number },
    calculatedPrice: { type: Number },
    inventoryLevel: { type: Number },
    inventoryWarningLevel: { type: Number },
    inventoryTracking: { type: String }


});

module.exports = mongoose.model('products', products);





// "id": 77,
// "name": "[Sample] Fog Linen Chambray Towel - Beige Stripe",
// "type": "physical",
// "sku": "SLCTBS",
// "description": "<p>The perfect beach towel: thin, lightweight and highly absorbent. Crafted by Fog Linen in Japan using soft Lithuanian linen, each towel rolls up for compact stowaway. Dry off after a refreshing dip in the ocean and stretch out on it for a sun bath. The thinness ensures a quick dry so you can have it rolled back up in your bag without soaking your belongings.</p>\n<p>Measures 75 x 145 cm/29.5 x 57 in</p>\n<p>100% Linen</p>",
// "weight": 1,
// "width": 0,
// "depth": 0,
// "height": 0,
// "price": 49,
// "cost_price": 0,
// "retail_price": 0,
// "sale_price": 0,
// "map_price": 0,
// "tax_class_id": 0,
// "product_tax_code": "",
// "calculated_price": 49,
// "categories": [
//     23,
//     18
// ],
// "brand_id": 0,
// "option_set_id": 14,
// "option_set_display": "right",
// "inventory_level": 0,
// "inventory_warning_level": 0,
// "inventory_tracking": "none",
// "reviews_rating_sum": 0,
// "reviews_count": 0,
// "total_sold": 4,
// "fixed_cost_shipping_price": 0,
// "is_free_shipping": false,
// "is_visible": true,
// "is_featured": false,
// "related_products": [
//     -1
// ],
// "warranty": "",
// "bin_picking_number": "",
// "layout_file": "product.html",
// "upc": "",
// "mpn": "",
// "gtin": "",
// "search_keywords": "",
// "availability": "available",
// "availability_description": "",
// "gift_wrapping_options_type": "any",
// "gift_wrapping_options_list": [],
// "sort_order": 0,
// "condition": "New",
// "is_condition_shown": false,
// "order_quantity_minimum": 0,
// "order_quantity_maximum": 0,
// "page_title": "",
// "meta_keywords": [],
// "meta_description": "",
// "date_created": "2015-07-03T17:57:10+00:00",
// "date_modified": "2015-08-05T18:17:22+00:00",
// "view_count": 63,
// "preorder_release_date": null,
// "preorder_message": "0",
// "is_preorder_only": false,
// "is_price_hidden": false,
// "price_hidden_label": "0",
// "custom_url": {
//     "url": "/fog-linen-chambray-towel-beige-stripe/",
//     "is_customized": false
// },
// "base_variant_id": null,
// "open_graph_type": "product",
// "open_graph_title": "",
// "open_graph_description": "",
// "open_graph_use_meta_description": true,
// "open_graph_use_product_name": true,
// "open_graph_use_image": true
// },