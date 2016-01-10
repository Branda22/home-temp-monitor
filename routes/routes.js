/**
 * Created by Christian on 1/9/16.
 */

var db = require('../db/db.js');
var bcrypt = require('bcrypt');

var Routes = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/signup', function(req, res) {
       res.render('signup');
    });

    app.post('/signup', function(req, res) {
        var userInfo = req.body;

        if (Object.keys(req.body).length > 0) {
            bcrypt.hash(userInfo.password, 8, function(err, hash) {
                if(err) return console.error('hashing error', err);
                var client = db.getDBConnection();
                client.query("INSERT INTO users(email, user_name, password) values($1, $2, $3)",
                    [userInfo.email, userInfo.user, hash], function(err, result) {
                        if(err) return console.error('Error inserting the user', err);
                        console.log('RECORD INSERTED INTO users table');
                        res.render('dashboard');
                    });
            });
        }
    });

    app.post('/login', function(req, response) {
        var loginInfo = req.body;
        var client = db.getDBConnection();
        client.query('SELECT * FROM users WHERE user_name = $1',
            [loginInfo.user], function(err, res) {
            if(err) return console.error('SELECT error', err);
            if(res.rows.length) {
                bcrypt.compare(loginInfo.password, res.rows[0].password, function(err, res){
                    if(err) return console.error('bcrypt error', err);
                    if(res) response.render('dashboard');
                });
            } else {
                response.render('index', {
                    error: {
                        message: 'User ' + loginInfo.user +  ' not found'
                    }
                });
            }
        });
    });

    app.post('/logtemp', function(req, res) {
       console.log('data from Arduino', req.body);
    });
};

module.exports = Routes;