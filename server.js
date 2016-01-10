/**
 * Created by Christian on 1/9/16.
 */
var Express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var db = require('./db/db.js');
db.connectDb();
var app = Express();

app.set('port', (process.env.PORT || 5000));
app.use(Express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/routes.js')(app);

app.listen(app.get('port'), function() {
    console.log('Temperature server listening on port:', app.get('port'));
});