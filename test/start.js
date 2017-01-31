/**
 * Created by agung on 28/09/16.
 */
/*
 * author : agung.julisman@yahoo.com
 * */

const chai = require('chai'),
  chaiHttp = require('chai-http'),
  server = require('./../app'),
  should = chai.should()

chai.use(chaiHttp)

/* TODO:agung: Create test for express server */

describe('Start Up', () => {
  it('should return a Message Api is running GET', (done) => {
    chai.request(server)
            .get('/')
            .end((err, res) => {
              res.should.have.status(200)
              res.should.be.json
              res.body.should.be.a('object')
              res.body.should.have.property('status')
              res.body.status.should.equal('Api is running!')
              done()
            })
  })

  it('should status 404 when url is not found', function (done) {
    chai.request(server)
            .get('/as')
            .end((err, res) => {
              res.should.have.status(404)
              done()
            })
  })

  it('should have a swagger for documentation version 1.0.0', function (done) {
    chai.request(server)
            .get('/api/v1/swagger.json')
            .end((err, res) => {
              res.should.have.status(200)
              res.should.be.json
              res.body.should.be.a('object')
              res.body.should.have.property('info')
              res.body.info.should.have.property('version')
              res.body.info.version.should.equal('1.0.0')
              done()
            })
  })
})
