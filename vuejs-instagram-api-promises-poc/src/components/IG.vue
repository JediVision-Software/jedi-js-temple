<template src="../templates/ig.html"></template>
<script>
export default {
  name: 'ig',
  data () {
    return {
    }
  },
  methods: {
    getTicker: function () {
    }
  },
  created: function () {
    var href = window.location.href
    console.log('IG) href: ' + href + ' : ' + href.indexOf('#access_token'))
  }
}
</script>
