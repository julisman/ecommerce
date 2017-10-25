/*lib*/
module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send({
            status: 'Api is running!'
        })
    })
}
