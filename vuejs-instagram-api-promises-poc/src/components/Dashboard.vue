<template src="../templates/dashboard.html"></template>
<script>
import Vue from 'vue'
export default {
  name: 'dashboard',
  data () {
    return {
      endpoints: {
        followsURL: 'https://api.instagram.com/v1/users/self/follows?access_token='
      }
    }
  },
  methods: {
    getFollows: function () {
      var self = this
      var accessToken = Vue.ls.get('accessToken')
      console.log('DASHBOARD: created, ' + accessToken)
      self.$http.get(self.endpoints.followsURL + accessToken).then(response => {
        console.log('---200 OK--')
        console.log(response)
        console.log(response.body)
        console.log('---')
      }, response => {
        console.log('---500 not OK --')
        // error callback
      })
    }
  },
  created: function () {
    this.getFollows()
  }
}
</script>
