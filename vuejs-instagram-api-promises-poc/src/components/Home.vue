<template src="../templates/home.html"></template>
<style scoped src="../css/home.css"></style>
<script>
export default {
  name: 'home',
  data () {
    return {
      endpoints: {
        oauthURL: 'https://api.instagram.com/oauth/authorize?client_id=210a468d3bf14835a73d0d6d01a59cd1&redirect_uri=http://localhost:8080&scope=public_content+follower_list&response_type=token'
      },
      configuration: {
        timeout: 3000
      }
    }
  },
  methods: {
    getImplicitTypeToken: function () {
      var self = this
      setInterval(function () {
        console.log('Getting client-side (implicit) authentication token')
        window.location.href = self.endpoints.oauthURL
      }, self.configuration.timeout)
      // self.$http.get(self.endpoints.oauthURL).then(response => {
      //   console.log('---200 OK--')
      //   console.log(response)
      //   console.log(response.body)
      //   console.log('---')
      // }, response => {
      //   console.log('---500 not OK --')
      //   // error callback
      // })
      // self.$http.get(self.endpoints.followedByURL + self.configuration.token).then(response => {
      //   console.log('---200 OK: Followed By--')
      //   console.log(response)
      //   console.log(response.body)
      //   console.log('---')
      // }, response => {
      //   console.log('---500 not OK --')
      //   console.log(response)
      //   // error callback
      // })
    }
  },
  created: function () {
    this.getImplicitTypeToken()
  }
}
</script>
