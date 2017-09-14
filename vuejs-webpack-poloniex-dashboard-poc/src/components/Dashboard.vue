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
        :data="configuration.trades.data"
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
          ],
          data: []
        },
        tickerEndpoint: 'https://poloniex.com/public?command=returnTicker',
        pollInterval: 10000
      },
      ticker: {
        last: 'loading...',
        low24: 'loading...',
        high24: 'loading...'
      },
      title: 'Dashboard: ticker, orderbooks, trades'
    }
  },
  methods: {
    getTicker: function () {
      this.$http.get(this.configuration.tickerEndpoint).then(function (response) {
        var tickerResponse = response.body[this.configuration.currencyPair.apiKey]
        this.ticker = {
          last: tickerResponse.last,
          low24: tickerResponse.low24hr,
          high24: tickerResponse.high24hr
        }
      }, function () {
        this.ticker = {
          last: 'N/A',
          low24: 'N/A',
          high24: 'N/A'
        }
      })
    },
    getTrades: function () {
      var tradesEndpoint = this.configuration.trades.endpoint + this.configuration.currencyPair.apiKey
      this.$http.get(tradesEndpoint).then(function (response) {
        var self = this
        response.body.forEach(function (trade) {
          self.configuration.trades.data.push({
            date: trade.date,
            amount: trade.amount,
            rate: trade.rate,
            total: trade.total,
            type: trade.type
          })
        })
      })
    }
  },
  created: function () {
    // this.getTicker()
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
