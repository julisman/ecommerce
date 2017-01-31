/*
* author : agung.julisman@yahoo.com
*
* */

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const swaggerJSDoc = require('swagger-jsdoc')

require('dotenv').load()
const app = express()
// swagger definition
let swaggerDefinition = {
    info: {
        title: 'Api Play Ground',
        version: '1.0.0',
        description: 'Demonstrating how to use a this microservices'
    },
    basePath: '/'
}

// options for the swagger docs
let options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./app/route/*.js']
}

// initialize swagger-jsdoc
let swaggerSpec = swaggerJSDoc(options)

app.get('/api/v1/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})

app.use('/api/v1/api-docs', express.static('./api-docs'))

/*mongodb*/
const mongoUrl = 'mongodb://'+process.env.MONGODB_HOST+':'+process.env.MONGODB_PORT+'/'+(app.settings.env === 'test' ? process.env.MONGODB_DOCUMENT_TEST : process.env.MONGODB_DOCUMENT )
mongoose.connect(mongoUrl, function(err){
    if(err) throw err
});

// middleware
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//for security disable the X-Powered-By header
app.disable('x-powered-by')

// routes ======================================================================
require('./app/route/routes.js')(app)
require('./app/route/product.js')(app)
require('./app/route/cart.js')(app)

/*
 |--------------------------------------------------------------------------
 | Start the Server
 | !module.parent === avoid error Uncaught error outside test suite:
 |--------------------------------------------------------------------------
 */

if(!module.parent){
    app.listen(process.env.APP_PORT, function() {
        console.log('Express server listening on port ' + process.env.APP_PORT)
    })
}
module.exports = app