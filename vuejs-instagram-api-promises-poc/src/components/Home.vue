<template src="../templates/home.html"></template>
<style scoped src="../css/home.css"></style>
<script>
import Vue from 'vue'
import RiseLoader from 'vue-spinner/src/RiseLoader.vue'
Vue.component('rise-loader', RiseLoader)
export default {
  name: 'home',
  components: {
    RiseLoader
  },
  data () {
    const ScopeType = {
      BASIC: 'basic',
      PUBLIC_CONTENT: 'public_content',
      FOLLOWER_LIST: 'follower_list',
      COMMENTS: 'comments',
      RELATIONSHIPS: 'relationships',
      LIKES: 'likes',
      SEPARATOR: '+'
    }
    var clientId = '210a468d3bf14835a73d0d6d01a59cd1'
    var redirectUri = 'http://localhost:8080'
    var scope =
      ScopeType.BASIC + ScopeType.SEPARATOR +
      ScopeType.PUBLIC_CONTENT + ScopeType.SEPARATOR +
      ScopeType.FOLLOWER_LIST + ScopeType.SEPARATOR +
      ScopeType.COMMENTS + ScopeType.SEPARATOR +
      ScopeType.RELATIONSHIPS + ScopeType.SEPARATOR +
      ScopeType.LIKES
    console.log(scope)
    var responseType = 'token'
    return {
      endpoints: {
        oauthURL: 'https://api.instagram.com/oauth/authorize' +
          '?client_id=' + clientId +
          '&redirect_uri=' + redirectUri +
          '&scope=' + scope +
          '&response_type=' + responseType
      },
      configuration: {
        timeout: 1000
      },
      color: '#40B885',
      size: '50px',
      margin: '2px',
      radius: '100%',
      loading: true
    }
  },
  methods: {
    getImplicitTypeToken: function () {
      var self = this
      setInterval(function () {
        console.log('Getting client-side (implicit) authentication token')
        window.location.href = self.endpoints.oauthURL
      }, self.configuration.timeout)
    }
  },
  created: function () {
    this.getImplicitTypeToken()
  }
}
</script>
