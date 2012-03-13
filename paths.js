var protocol = "http://"
  , host = "api.cbssports.com"

var paths = {
  league: {
    draft: {
      config: '/fantasy/league/draft/config',
      order: '/fantasy/league/draft/order',
      results: '/fantasy/league/draft/results'
    },
    scoring: {
      live: '/fantasy/league/scoring/live',
      categories: '/fantasy/league/scoring/categories',
      rules: '/fantasy/league/scoring/rules'
    },
    owners: '/fantasy/league/owners',
    story: '/fantasy/league/story',
    transactionlist: {
      adddrops: '/fantasy/league/transaction-list/add-drops',
      trades: '/fantasy/league/transaction-list/trades',
      log: '/fantasy/league/transaction-list/log'
    },
    transactions: {
      adddrop: '/fantasy/league/transactions/adddrop',
      lineup: '/fantasy/league/transactions/lineup',
      trade: '/fantasy/league/transactions/trade',
      waiverorder: '/fantasy/league/transactions/waiver-order'
    },
    fantasypoints: '/fantasy/league/fantasy-points',
    teams: '/fantasy/league/teams',
    news: {
      headlines: '/fantasy/league/news/headlines'
    },
    messageboard: {
      meassagelist: '/fantasy/league/message-board/message-list',
      message: '/fantasy/league/message-board/message'
    },
    stats: '/fantasy/league/stats',
    rosters: '/fantasy/league/rosters',
    rules: '/fantasy/league/rules',
    schedule: '/fantasy/league/schedules',
    standings: {
      breakdown: '/fantasy/league/standings/breakdown',
      byperiod: '/fantasy/league/standings/by-period',
      overall: '/fantasy/league/standings/overall',
      power: '/fantasy/league/standings/power'
    }
  },
  news: {
    story: '/fantasy/news/story',
    headlines: '/fantasy/news/headlines'
  },
  players: {
    adp: '/fantasy/players/average-draft-position',
    list: '/fantasy/players/list',
    outlook: '/fantasy/players/outlook',
    rankings: '/fantasy/players/rankings',
    search: '/fantasy/players/search',
    updates: '/fantasy/players/updates',
    rostertrends: {
      activated: '/fantasy/players/roster-trends/most-activated',
      added: '/fantasy/players/roster-trends/most-added',
      benched: '/fantasy/players/roster-trends/most-benched',
      dropped: '/fantasy/players/roster-trends/most-dropped',
      traded: '/fantasy/players/roster-trends/most-traded',
      viewed: '/fantasy/players/roster-trends/most-viewed'
    }
  },
  positions: '/fantasy/positions',
  sports: '/fantasy/sports',
  stats: '/fantasy/stats',
  statscategories: '/fantasy/stats/categories'
}

module.exports = paths
module.exports.protocol = protocol
module.exports.host = host
