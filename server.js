var http = require('http'),
	express = require('express'),
	path = require('path');

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 4567);
    app.use(express.logger('dev'));
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});