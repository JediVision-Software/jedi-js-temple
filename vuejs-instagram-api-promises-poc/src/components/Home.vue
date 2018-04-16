<template src="../templates/home.html"></template>
<style scoped src="../css/home.css"></style>
<script>
import router from '../router'
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
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
        router.push({name: 'oauthURL'})
      }, self.configuration.timeout)
    }
  },
  created: function () {
    this.getImplicitTypeToken()
  }
}
</script>
