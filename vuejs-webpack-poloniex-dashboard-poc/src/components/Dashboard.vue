<template src="../templates/dashboard.html"></template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../css/dashboard.css"></style>
<script>
export default {
  name: 'dashboard',
  data () {
    return {
      configuration: {
        currencyPair: {
          apiKey: 'USDT_BTC',
          ui: 'USD / BTC'
        },
        trades: {
          endpoint: 'https://poloniex.com/public?command=returnTradeHistory&currencyPair=',
          columns: [
            'date',
            'type',
            'amount',
            'rate',
            'total'
          ]
        },
        tickerEndpoint: 'https://poloniex.com/public?command=returnTicker',
        orderbook: {
          endpoint: 'https://poloniex.com/public?command=returnOrderBook&currencyPair=',
          columns: [
            'price',
            'amount',
            'total',
            'cumulative'
          ]
        },
        pollInterval: 10000
      },
      ticker: {
        last: 'loading...',
        low24: 'loading...',
        high24: 'loading...'
      },
      trades: {
        data: []
      },
      orderbooks: {
        buy: [],
        sell: []
      },
      title: 'Dashboard: ticker, orderbooks, trades'
    }
  },
  methods: {
    getTicker: function () {
      var self = this
      self.$http.get(self.configuration.tickerEndpoint).then(function (response) {
        var tickerResponse = response.body[self.configuration.currencyPair.apiKey]
        self.ticker = {
          last: tickerResponse.last,
          low24: tickerResponse.low24hr,
          high24: tickerResponse.high24hr
        }
      }, function () {
        self.ticker = {
          last: 'N/A',
          low24: 'N/A',
          high24: 'N/A'
        }
      })
    },
    getTrades: function () {
      var self = this
      var tradesEndpoint = self.configuration.trades.endpoint + self.configuration.currencyPair.apiKey
      self.$http.get(tradesEndpoint).then(function (response) {
        this.trades.data.length = 0
        response.body.forEach(function (trade) {
          self.trades.data.push({
            date: trade.date,
            amount: trade.amount,
            rate: trade.rate,
            total: trade.total,
            type: trade.type
          })
        })
      })
    },
    getOrderBooks: function () {
      var self = this
      var orderbookEndpoint = self.configuration.orderbook.endpoint + self.configuration.currencyPair.apiKey
      self.$http.get(orderbookEndpoint).then(function (response) {
        // buy orders
        self.orderbooks.buy.length = 0
        var buyCumulative = 0
        response.body.bids.forEach(function (order) {
          var total = order[0] * order[1]
          buyCumulative = buyCumulative + total
          self.orderbooks.buy.push({
            price: order[0],
            amount: order[1],
            total: total,
            cumulative: buyCumulative
          })
        })
        // sell orders
        self.orderbooks.sell.length = 0
        var sellCumulative = 0
        response.body.asks.forEach(function (order) {
          var total = order[0] * order[1]
          sellCumulative = sellCumulative + total
          self.orderbooks.sell.push({
            price: order[0],
            amount: order[1],
            total: total,
            cumulative: sellCumulative
          })
        })
      })
    }
  },
  created: function () {
    this.getOrderBooks()
    this.getTicker()
    this.getTrades()

    // setInterval(function () {
    //   this.getOrderBooks()
    //   this.getTicker()
    //   this.getTrades()
    // }.bind(this), this.configuration.pollInterval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}

#tradesTable {
  float: left;
  margin-right: 140px;
}

#buyOrdersTable {
  float: left;
  margin-right: 110px;
}

#sellOrdersTable {
  float: left;
}
</style>
