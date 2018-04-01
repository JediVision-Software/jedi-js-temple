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
    return {
      endpoints: {
        oauthURL: 'https://api.instagram.com/oauth/authorize?client_id=210a468d3bf14835a73d0d6d01a59cd1&redirect_uri=http://localhost:8080&scope=public_content+follower_list&response_type=token'
      },
      configuration: {
        timeout: 500
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
