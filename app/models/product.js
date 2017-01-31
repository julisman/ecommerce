// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var productSchema = mongoose.Schema({

    sku: String,
    title: String,
    description: String,

    manufacture_details: {
        model_number: String,
        release_date: Date
    },

    shipping_details: {
        weight: Number,
        width: Number,
        height: Number,
        depth: Number
    },

    quantity: Number,

    pricing: {
        price: Number
    },

    created_at: { type: Date, default: Date.now }

});

// create the model for users and expose it to our app
module.exports = mongoose.model('product', productSchema);
