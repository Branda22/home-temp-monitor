/**
 * Created by Christian on 1/9/16.
 */
var Express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');


var app = Express();
app.use(Express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/login', function(req, res) {
    var auth = req.body;
    if (auth['user'] === 'branda22') res.render('dashboard');
});

app.listen(8080, function() {
    console.log('listening on port:', 8080);
});