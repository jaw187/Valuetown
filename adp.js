
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')

//var app = module.exports = express.createServer();
var app = express();

// Configuration

app.configure(function(){
  app.set('port', 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser("3kjgfSSi3ksnvkkag"));
  app.use(express.session({key: 'express.side'}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);
app.get('/sevengame', routes.seven);
app.get('/list/players', routes.players);
app.get('/list/players/:position', routes.position);
app.get('/sortby/:which', routes.sortby);

http.createServer(app).listen(app.get('port'), function () {
  console.log("GO!");
});
//app.listen(4000);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
