/*lib*/

var moment = require('moment');
var request = require('request');
var _ = require('underscore');
var async = require("async");

/*model*/
var Cart = require('./../models/cart');

module.exports = function(app) {


    /*
     |--------------------------------------------------------------------------
     | END POINT cart
     |--------------------------------------------------------------------------
     */
    app.route('/cart')
        .get(function(req, res) {

        })
        .put(function(req, res) {

        })
        .delete(function(req, res){

        })
        .post(function(req, res){
            if(!_.isEmpty(req.body)){
                var carts = new Cart(req.body);
                carts.save(function(err, doc) {
                if (err)  res.status(500).send({ message: err.message });
                res.send({ message: 'success' ,doc : doc });
                });
            }else{
                res.status(400).send({ message: 'body is empty' });
            }

        })
}
