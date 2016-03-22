var Hapi = require('hapi');

var getplayers = require('./getplayers');
var getpositions = require('./getpositions');

getpositions(function (positionlist) {
  getplayers(function (players) {

    var positions = {}

    for (var i = 0; i < positionlist.length; i++) {
      getplayers(positionlist[i].abbr, function (players,position) {
console.log(position)
        positions[position] = players
      })
    }

    var server = new Hapi.Server(4000);

    server.views({
      engines: {
        jade: 'jade'
      },
      path: './views'
    });

    var handler = function (request,reply) {
      
      if (request.params.position) {
        reply.view('players',{ positions: positionlist, players: positions[request.params.position] })
      }
      else {
        reply.view('players',{ positions: positionlist, players: players })
      }
    }

    server.route({
      method: 'GET',
      path: '/list/players',
      handler: handler
    });

    server.route({
      method: 'GET',
      path: '/list/players/{position}',
      handler: handler
    });

    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
          directory: { path: './public', listing: false, index: true }
      }
    });

    server.start();
    console.log('Server started...')

  })
})
