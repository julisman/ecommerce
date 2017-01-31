/*lib*/
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Api is running!');
    });
}
