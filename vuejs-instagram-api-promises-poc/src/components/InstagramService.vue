<script>
import Vue from 'vue'
import router from '../router'
import InstagramRepository from './InstagramRepository'
export default {
  name: 'instagram-service',
  components: {
    InstagramRepository
  },
  methods: {
    getUserInfo: function () {
      var accessToken = Vue.ls.get('accessToken')
      if (accessToken == null) {
        router.push({name: 'home'})
      }
      if (this.apiDeprecated('self')) {
        return new Promise((resolve, reject) => {
          var data = InstagramRepository.methods.getUserSelf()
          resolve(data)
        })
      } else {
        var selfPromise = Vue.http.get('https://api.instagram.com/v1/users/self?access_token=' + accessToken).promise
        return Promise.resolve(selfPromise)
      }
    },
    getUserFollows: function () {
      var accessToken = Vue.ls.get('accessToken')
      if (accessToken == null) {
        router.push({name: 'home'})
      }
      if (this.apiDeprecated('follows')) {
        return new Promise((resolve, reject) => {
          var data = InstagramRepository.methods.getUserFollowsData()
          resolve(data)
        })
      } else {
        var followsPromise = Vue.http.get('https://api.instagram.com/v1/users/self/follows?access_token=' + accessToken).promise
        return Promise.resolve(followsPromise)
      }
    },
    getUserFollowsBy: function () {
      var accessToken = Vue.ls.get('accessToken')
      if (accessToken == null) {
        router.push({name: 'home'})
      }
      if (this.apiDeprecated('followsBy')) {
        return new Promise((resolve, reject) => {
          var data = InstagramRepository.methods.getUserFollowsByData()
          resolve(data)
        })
      } else {
        var followsPromise = Vue.http.get('https://api.instagram.com/v1/users/self/followed-by?access_token=' + accessToken).promise
        return Promise.resolve(followsPromise)
      }
    },
    apiDeprecated: function (endpoint) {
      switch (endpoint) {
        case 'self': return false
        case 'follows': return true
        case 'followedBy': return true
        default: return true
      }
    }
  },
  created: function () {}
}
</script>
