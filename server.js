var express = require("express");
var app = express();
var socket = require('socket.io');
var server = require('http').createServer(app).listen(process.env.PORT || 5000);

app.use(express.static(__dirname + '/'));

var pub = __dirname + '/public';
app.use(express.static(pub));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.set('view options', { layout: false });

app.engine('.html', require('ejs').__express);

app.use(express.static(__dirname + '/'));

// Routes
app.get('/', function(req, res){
  res.render('index', {
    title: 'Aquila'
  });
});

// Listening for any request
var io = socket.listen(server);

console.log("Aquila server is up and running");
