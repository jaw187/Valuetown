var paths = require('./paths')
  , sport = "baseball"
  //, players = {}
  , players =[]

function get(path, position, cb) {

  if (!cb) {
    cb = position;
  }

  var route = path.split('/')
    , http = require('http')
    , response = ''
    , options = {
      host : paths.host,
      port : 80,
    }

  var tempPath = paths;
  for (var i = 0; i < route.length; i++) {
    tempPath = tempPath[route[i]]
  }

  options.path = tempPath + "?response_format=JSON"
  if (route[0] !== 'league') {
    options.path += "&SPORT=" + sport
  }

  if (arguments.length > 2) {
    options.path += "&POSITION=" + position;
  }

  http.get(options, function (res) {

      res.on('data', function (chunk) {

          response += chunk
        })
      res.on('end', function () {
          if (response !== 'No Players Found ') {
            cb(null,JSON.parse(response));
          }
        })
      res.on('error', function (e) {

          cb(e)
        })
      res.setEncoding('utf-8')
    })
}


module.exports = function (position, cb) {

  if (!cb) {
    cb = position;
  }

  /*
  get('players/list', function (err,res) {
      if (err) {
        console.log("get players error")
      }
      else {
        for (i in res.body.players) {
          players[res.body.players[i].id] = res.body.players[i]
        }
*/
//      get('players/adp', function (err,res) {
      function idk(err,res) {

        var players=[];
           if (err) {
             console.log("GET ADP ERROR")
           }
           else {
             for (i in res.body.average_draft_position.players) {
               players.push({
                   fullname : res.body.average_draft_position.players[i].fullname,
                   pro_team : res.body.average_draft_position.players[i].pro_team,
                   draft : {
                     adp : res.body.average_draft_position.players[i].avg - 0,
                     pct : res.body.average_draft_position.players[i].pct - 0,
                     high : res.body.average_draft_position.players[i].high - 0,
                     low : res.body.average_draft_position.players[i].low - 0
                   }
                 });
             }
             if (arguments.length === 1) {
               cb(players);
             }
             else {
               cb(players,position)
             }
           }
//         })
      }

      if (arguments.length === 1) {
        get('players/adp', idk);
      }
      else {
        get('players/adp',position,idk);
      }
//     }
//   })
}
