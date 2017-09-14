<template>
  <div class="dashboard">
    <h1>{{ title }}</h1>
    <h2>Currency Pair: <b>{{ configuration.currencyPair.ui }}</b></h2>
    <h3>Ticker: <b>{{ ticker.last }}</b></h3>
    <h3>Low24: <b>{{ ticker.low24 }}</b>, High24: <b>{{ ticker.high24 }}</b></h3>
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
        tickerEndpoint: 'https://poloniex.com/public?command=returnTicker',
        tradesEndpointBase: 'https://poloniex.com/public?command=returnTradeHistory&currencyPair=',
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
      var tradesEndpoint = this.configuration.tradesEndpointBase + this.configuration.currencyPair.apiKey
      this.$http.get(tradesEndpoint).then(function (response) {
        console.log(response)
      }, function (error) {
        console.log('1')
        console.log(error)
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
