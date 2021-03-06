/**
 * Created by Christian on 1/9/16.
 */
var pg = require('pg');
var DBservice = {};

var connectionString = 'postgres://spowspmhweydfc:W9nwjk58Y-psvN5lRC8QRgqFEs@ec2-107-20-152-139.compute-1.amazonaws.com:5432/d9v90b49bhl12q' + '?ssl=true';
var DB = new pg.Client(connectionString);
DBservice.connectDb = function() {
    DB.connect(function(err){
        if(err){
            console.log(err);
        } else {
            console.log('Database Connection Successful');
            this.createTables();
        }
    }.bind(this));
};

DBservice.createTables = function() {
    var userTable = 'CREATE TABLE IF NOT EXISTS users (' +
                        'id SERIAL PRIMARY KEY,' +
                        'user_name TEXT,' +
                        'password TEXT,' +
                        'email TEXT' +
                    ');'

    DB.query(userTable, function (err, results) {
        if(err) {
            return console.error('Error creating table users:', err)
        }
        console.log('Table users created successfully');
    });

    var tempLog = 'CREATE TABLE IF NOT EXISTS temperature (' +
                        'id SERIAL PRIMARY KEY,' +
                        'temperature DECIMAL,' +
                        'time TIMESTAMP default current_timestamp' +
            ')';

    DB.query(tempLog, function (err, results) {
        if(err) {
            return console.error('Error creating table temperature:', err)
        }
        console.log('Table temperature created successfully');
    });
};

DBservice.getDBConnection = function() {
    return DB;
};
module.exports = DBservice;
