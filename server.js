var express = require('express');

// create our app
var app = express();

// tell app which folder to serve
app.use(express.static('public'));

app.listen(3000, function(){
	console.log('Express server is up on port 3000');
});