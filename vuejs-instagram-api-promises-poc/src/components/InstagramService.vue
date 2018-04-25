<script>
import Vue from 'vue'
import router from '../router'
import InstagramRepository from './InstagramRepository'
export default {
  name: 'instagram-service',
  components: {
    InstagramRepository
  },
  data () {
    return {
      endpoints: {
        selfURL: 'https://api.instagram.com/v1/users/self?access_token=',
        followsURL: 'https://api.instagram.com/v1/users/self/follows?access_token=',
        followedByURL: 'https://api.instagram.com/v1/users/self/followed-by?access_token='
      },
      data: {
        self: {},
        peopleYouLikeButTheyDontLikeYou: [],
        peopleMutualLove: [],
        peopleWhoLikeYouButYouDontLikeThem: []
      }
    }
  },
  methods: {
    getUserInfo: function () {
      var accessToken = Vue.ls.get('accessToken')
      if (accessToken == null) {
        router.push({name: 'home'})
      }
      var selfPromise = Vue.http.get('https://api.instagram.com/v1/users/self?access_token=' + accessToken).promise
      return Promise.resolve(selfPromise)
    },
    getUserFollows: function () {
      var accessToken = Vue.ls.get('accessToken')
      if (accessToken == null) {
        router.push({name: 'home'})
      }
      // var followsPromise = Vue.http.get('https://api.instagram.com/v1/users/self/follows?access_token=' + accessToken).promise
      // return Promise.resolve(followsPromise)
      return new Promise((resolve, reject) => {
        var data = InstagramRepository.methods.getUserFollowsData()
        resolve(data)
      })
    },
    getUserFollowsBy: function () {
      var accessToken = Vue.ls.get('accessToken')
      if (accessToken == null) {
        router.push({name: 'home'})
      }
      // var followsPromise = Vue.http.get('https://api.instagram.com/v1/users/self/followed-by?access_token=' + accessToken).promise
      // return Promise.resolve(followsPromise)
      return new Promise((resolve, reject) => {
        var data = InstagramRepository.methods.getUserFollowsByData()
        resolve(data)
      })
    }
  },
  created: function () {}
}
</script>
