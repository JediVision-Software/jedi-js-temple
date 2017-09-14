<template>
  <div class="dashboard">
    <h1>{{ title }}</h1>
    <h2>Currency Pair: <b>{{ currencyPair.ui }}</b></h2>
    <h3>Ticker: <b>{{ ticker.last }}</b></h3>
    <h3>Low24: <b>{{ ticker.low24 }}</b>, High24: <b>{{ ticker.high24 }}</b></h3>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      currencyPair: {
        apiKey: 'USDT_BTC',
        ui: 'USD / BTC'
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
      this.$http.get('https://poloniex.com/public?command=returnTicker').then(function (response) {
        var tickerResponse = response.body[this.currencyPair.apiKey]
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
    }
  },
  created: function () {
    this.getTicker()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}
</style>
