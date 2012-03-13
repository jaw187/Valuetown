var league = require('../league.js');

function getcontent(cb) {
  var getplayers = require('../getplayers')
  var getpositions = require('../getpositions')

  getplayers(function (players) {
      getpositions(function (positions) {
          cb(players,positions);
        })
    })
}

function filterplayers(players,positions,req,res) {
  var filteredplayers = []
    , k
    , j = -1
  for (i in players) {
    if (players[i].draft) {
       //SORTINGLOGIC
       //filterbyleague
       //filterbyposition
       j++;
       if (j === 0) {
         filteredplayers[j] = players[i]
       }
       else {
         for (k = 0; k < filteredplayers.length; k++) {
           if (req.session.sortby === 'high') {
             if (players[i].draft.high <= filteredplayers[k].draft.high) {
               if (players[i].draft.high === filteredplayers[k].draft.high) {
                 if (players[i].draft.adp <= filteredplayers[k].draft.adp) {
                   filteredplayers.splice(k,0,players[i])
                   break
                 }
               }
               else {
                 filteredplayers.splice(k,0,players[i])
                 break
               }
             }
           }
           else if (req.session.sortby === 'low') {
             if (players[i].draft.low <= filteredplayers[k].draft.low) {
               if (players[i].draft.low === filteredplayers[k].draft.low) {
                 if (players[i].draft.adp <= filteredplayers[k].draft.adp) {
                   filteredplayers.splice(k,0,players[i])
                   break
                 }
               }
               else {
                 filteredplayers.splice(k,0,players[i])
                 break
               }
             }
           }
           else if (req.session.sortby === 'pct') {
             if (players[i].draft.pct >= filteredplayers[k].draft.pct) {
               if (players[i].draft.pct === filteredplayers[k].draft.pct) {
                 if (players[i].draft.adp <= filteredplayers[k].draft.adp) {
                   filteredplayers.splice(k,0,players[i])
                   break
                 }
               }
               else {
                 filteredplayers.splice(k,0,players[i])
                 break
               }
             }
           }
           else {
             if (players[i].draft.adp <= filteredplayers[k].draft.adp) {
               filteredplayers.splice(k,0,players[i])
               break
             }
           }
         }
       }
     }
   }

   res.render('players', { positions: positions, players: filteredplayers, session: req.session})
}



exports.index = function (req,res) {
  res.render('index', { title: 'Hi' });
}

exports.players = function (req,res) {
  getcontent(function (players,positions) {
      filterplayers(players,positions,req,res);
    })
}

exports.sortby = function (req,res,next) {
  console.log("RTTTTTTTTTTTTTTTTTTTTTTTTTT");
  if (req.params.which === "high"  || req.params.which === "low" || req.params.which === "adp" || req.params.which === "pct") {
    console.log("ASDFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    req.session.sortby = req.params.which;
  }
  console.log("WERRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
  res.redirect('/list/players');
}

exports.seven = function(req, res){
}
