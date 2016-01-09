/**
 * Created by Christian on 1/9/16.
 */
var Routes = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.post('/login', function(req, res) {
        var auth = req.body;
        if (auth['user'] === 'branda22') res.render('dashboard');
    });
};

module.exports = Routes;