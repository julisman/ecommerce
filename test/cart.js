/*
 * author : agung.julisman@yahoo.com
 * */

// set env 'tes't to use document product test
process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../app');
var Chat = require("../app/models/cart");

var should = chai.should();
chai.use(chaiHttp);

describe('Cart', function() {

    Chat.collection.drop();

    it('should add a SINGLE product to CART without body /cart POST', function(done) {
        chai.request(server)
            .post('/cart')
            .send()
            .end(function(err, res){
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.be.a('object');
                done();
            });
    });

    it('should add a SINGLE product to CART /cart POST', function(done) {
        chai.request(server)
            .post('/cart')
            .send({
                quantity: 1,
                total: 1000,
                products: [{
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
                }]
            })
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('doc');
                res.body.doc.should.have.property('_id');
                done();
            });
    });


});


