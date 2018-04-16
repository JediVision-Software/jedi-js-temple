<template src="../templates/unexpected.html"></template>
<script>
import Vue from 'vue'
import router from '../router'
export default {
  name: 'unexpected',
  created: function () {
    var href = window.location.href
    var isRedirect = href.indexOf('#/access_token=') !== -1
    if (isRedirect) {
      var accessToken = href.replace('http://localhost:8080/#/access_token=', '')
      Vue.ls.set('accessToken', accessToken)
      router.push({name: 'dashboard'})
    } else {
      // 404 page
    }
  }
}
</script>
