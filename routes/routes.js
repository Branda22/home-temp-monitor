/**
 * Created by Christian on 1/9/16.
 */

var db = require('../db/db.js');

var Routes = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/signup', function(req, res) {
       res.render('signup');
    });

    app.post('/signup', function(req, res) {

    });

    app.post('/login', function(req, res) {

    });
};

module.exports = Routes;