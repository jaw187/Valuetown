module.exports = function(players,positions) {

  var filteredplayers = []
    , k
    , j = -1;

  for (var i = 0; i < players.length; i++) {
    if (players[i].draft) {
       j++;
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
           filteredplayers.push(players[i]);
           break;
         }
       }
       if (k === filteredplayers.length) {
         filteredplayers.push(players[i]);
       }
     }
   }

   return filteredplayers;
}
