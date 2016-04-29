/*
 * author : agung.julisman@yahoo.com
 * */

// set env 'tes't to use document product test
process.env.NODE_ENV = 'production';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../app');
var Product = require("../app/models/product");

var should = chai.should();
chai.use(chaiHttp);


describe('Product', function() {

    /*drop product collection first*/
    Product.collection.drop();

    beforeEach(function(done){
        var newProduct = new Product({
            sku: '01229822',
            title: 'nike',
            description: 'Sepatu terbaik',

            manufacture_details: {
                model_number: 'A002',
                release_date: Date.now
            },

            shipping_details: {
                weight: 1,
                width: 1,
                height: 1,
                depth: 1
            },

            quantity: 1,

            pricing: {
                price: 1000
            }
        });
        newProduct.save(function(err) {
            done();
        });
    });

    afterEach(function(done){
      //  Product.collection.drop();
        done();
    });

    it('should add a SINGLE product on /product POST', function(done) {
        chai.request(server)
            .post('/product')
            .send({
                sku: '01229822',
                title: 'Adidas',
                description: 'Sepatu terbaik',

                manufacture_details: {
                    model_number: 'A001',
                    release_date: Date.now
                },

                shipping_details: {
                    weight: 1,
                    width: 1,
                    height: 1,
                    depth: 1
                },

                quantity: 1,

                pricing: {
                    price: 1000
                }
            })
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                done();
            });
    });


});
