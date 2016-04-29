/*lib*/

var moment = require('moment');
var request = require('request');
var _ = require('underscore');
var async = require("async");

/*model*/
var Product = require('./../models/product');

module.exports = function(app) {

    /*
     |--------------------------------------------------------------------------
     | END POINT product
     |--------------------------------------------------------------------------
     */
    app.route('/product')
        .get(function(req, res) {
            Product.find({}, function(err,doc){
                if (err)  res.status(500).send({ message: err.message });
                res.send({ message: 'success' ,doc : doc });
            })
        })
        .put(function(req, res) {
            /*Product.update({_id:req.body.id}, { $set: { status: 'cancel' }},{upsert:true}, function (err,update) {
                if (err) res.status(500).send({ message: err.message });
                res.send({ message: 'success' });
            })*/
        })
        .delete(function(req, res){

        })
        .post(function(req, res){

            var products = new Product(req.body);
            products.save(function(err, doc) {
                if (err)  res.status(500).send({ message: err.message });
                res.send({ message: 'success' ,doc : doc });
            });
        })


}
