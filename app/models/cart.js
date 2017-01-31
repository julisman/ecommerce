// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var cartSchema = mongoose.Schema({

    status: { type: String, default: 'active' },
    quantity: Number,
    total: Number,
    products: [],
    created_at: { type: Date, default: Date.now }

});

// create the model for users and expose it to our app
module.exports = mongoose.model('cart', cartSchema);
