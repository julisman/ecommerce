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

        })
}
