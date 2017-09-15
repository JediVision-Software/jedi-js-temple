<template>
  <div class="dashboard">
    <div id="configuration">
      <h1>{{ title }}</h1>
      <h2>Currency Pair: <b>{{ configuration.currencyPair.ui }}</b></h2>
      <h3>Ticker: <b>{{ ticker.last }}</b></h3>
      <h3>Low24: <b>{{ ticker.low24 }}</b>, High24: <b>{{ ticker.high24 }}</b></h3>
    </div>
    <div id="tradesTable">
      <vuetable
        :api-mode="false"
        :fields="configuration.trades.columns"
        :data="trades.data"
      ></vuetable>
    </div>
  </div>
</template>

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
        orderbooksEndpoint: 'https://poloniex.com/public?command=returnOrderBook&currencyPair=',
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
      var orderbooksEndpoint = self.configuration.orderbooksEndpoint + self.configuration.currencyPair.apiKey
      self.$http.get(orderbooksEndpoint).then(function (response) {
        self.orderbooks.buy = response.body.bids
        self.orderbooks.sell = response.body.asks
      })
    }
  },
  created: function () {
    this.getOrderBooks()
    this.getTicker()
    this.getTrades()

    /*
    setInterval(function () {
      this.getTrades()
    }.bind(this), this.configuration.pollInterval)
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}
</style>
