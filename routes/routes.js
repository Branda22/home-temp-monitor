/**
 * Created by Christian on 1/9/16.
 */

var db = require('../db/db.js');
var bcrypt = require('bcrypt');

var Routes = function(app, socket) {
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
        var sess = req.session;
        console.log('session', sess);
        var loginInfo = req.body;
        var client = db.getDBConnection();
        client.query('SELECT * FROM users WHERE user_name = $1',
            [loginInfo.user], function(err, result) {
            if(err) return console.error('SELECT error', err);
            if(result.rows.length) {
                bcrypt.compare(loginInfo.password, result.rows[0].password, function(err, res){
                    if(err) return console.error('bcrypt error', err);
                    sess.email = result.rows[0].email;
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

    app.get('/logout', function(request, response) {
        var sess = request.session;
       if(sess.email) {
           sess.destroy(function() {
              response.render('index');
           });
       }
    });

    app.get('/dashboard', function(request, response) {
        var sess = request.session;
        if(sess.email) {
            response.redirect('dashboard');
        } else {
            response.render('index');
        }
    });

    app.get('/logtemp/temp/:temperature', function(req, response) {
        console.log('-------------------------------------------');
        if(Object.keys(req.params).length > 0) {
            socket.emit('newTemp', {
                temperature: req.params.temperature
            });
            var client = db.getDBConnection();
            client.query('INSERT INTO temperature(temperature) values($1)', [req.params.temperature], function(err, result) {
                if(err) return console.error('Error writing temperature to the temperature table', err);
                console.log('data saved from arduino', req.params, result);
                response.json({message: "Temperature saved to database"});
            });
        }
    });

    app.get('/temperature', function(req, response) {
       var client = db.getDBConnection();
        client.query('SELECT * FROM temperature', function(err, result) {
            if(result.rows.length > 0) {
                response.json({
                    response: result.rows
                });
            }
        })
    });
};

module.exports = Routes;