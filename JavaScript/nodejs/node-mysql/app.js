/**
* Module dependencies.
 */
 
var express = require('express')
 , routes = require('./routes')
 , user = require('./routes/user')
 , http = require('http')
 , path = require('path')
 , mysql = require('mysql');
 
var app = express();
 
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
 
// development only
if ('development' == app.get('env')) {
 app.use(express.errorHandler());
}
 
// Send parameters to MySQL Server
var dbconnection = mysql.createConnection({
 host:"127.0.0.1",
 user: "root",
 password: "password",
 database: "test_database"
});
 
// Check for an errors at the time of sending parameters
dbconnection.on( "error", function(error){
 console.log( "ERROR: " + error );
});
 
//Establish connection with MySQL
dbconnection.connect(function(error){
 if (error){
 console.log( "Error on connect: " + error);
 }
 });
 
// Send query to MySQL DB on request
app.get('/',function(req, res){
 var query="SELECT FirstName, LastName FROM users WHERE user_id='1'";
 dbconnection.query( query, function(err, rows, fields)
 {
 // There was an error or not?
 if(err != null)
 {
 res.end("Query error:" + err);
 }
 else
 {
 res.end("First Name :"+rows[0].FirstName+"\nLast Name :"+rows[0].LastName);
 
 }
 
 });
});
 
app.get('/users', user.list);
 
http.createServer(app).listen(app.get('port'), function(){
 console.log('Express server listening on port ' + app.get('port'));
});