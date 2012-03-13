var paths = require('./paths')
  , sport = "baseball"
  , positions= {}

function get(path, cb) {
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

  console.log(options);

  http.get(options, function (res) {
      res.on('data', function (chunk) {
          response += chunk
        })
      res.on('end', function () {
          cb(null,JSON.parse(response))
        })
      res.on('error', function (e) {
          cb(e)
        })
      res.setEncoding('utf-8')
    })
}


module.exports = function (cb) {
  get('positions', function (err,res) {
      if (err) {
        console.log("get positions error")
      }
      else {
        cb(res.body.positions)
     }  
   })
}
