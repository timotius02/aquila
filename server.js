var express = require('express');
	routes = require('./routes');
	user = require('./routes/user'),
	http = require('http'),
	path = require('path');

var app = express();

var pub = __dirname + '/public';
app.set('port', process.env.PORT || 3000);
app.use(express.static(pub));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.set('view options', { layout: false });
app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));


// Routing for app
app.get('/', function(req, res){
	res.render('index',{
		title: 'Welcome to Project Aquila'
	});
});

app.get('/app', function(req, res){
	res.render('venue',{
		title: 'Prototype 1.0'
	});
});

http.createServer(app).listen(app.get('port'), function(){
	console.log("Aquila server listening on port " + app.get('port'));
});