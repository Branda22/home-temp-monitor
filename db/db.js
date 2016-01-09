/**
 * Created by Christian on 1/9/16.
 */
var pg = require('pg');

var connectionString = 'postgres://spowspmhweydfc:W9nwjk58Y-psvN5lRC8QRgqFEs@ec2-107-20-152-139.compute-1.amazonaws.com:5432/d9v90b49bhl12q' + '?ssl=true';
var DB = new pg.Client(connectionString);
DB.connect(function(err){
    if(err){
        console.log(err);
    } else {
        console.log('db connect');
    }
});
module.exports = DB;
