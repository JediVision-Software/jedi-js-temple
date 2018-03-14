<template src="../templates/dashboard.html"></template>
<style scoped src="../css/dashboard.css"></style>
<script>
import Vue from 'vue'
export default {
  name: 'dashboard',
  data () {
    return {
      endpoints: {
        selfURL: 'https://api.instagram.com/v1/users/self?access_token=',
        followsURL: 'https://api.instagram.com/v1/users/self/follows?access_token=',
        followedByURL: 'https://api.instagram.com/v1/users/self/followed-by?access_token='
      },
      data: {
        self: {},
        // 3 groups (euler circles: left, intersaction, right)
        peopleYouLikeButTheyDontLikeYou: [],
        peopleMutualLove: [],
        peopleWhoLikeYouButYouDontLikeThem: []
      }
    }
  },
  methods: {
    splitPeopleTo3Groups: function () {
      var self = this
      var accessToken = Vue.ls.get('accessToken')
      // TODO: two cases (accessToken present / missing => redirect Home or 404.html)
      // promises
      var selfPromise = self.$http.get(self.endpoints.selfURL + accessToken).promise
      var followsPromise = self.$http.get(self.endpoints.followsURL + accessToken).promise
      var followedByPromise = self.$http.get(self.endpoints.followedByURL + accessToken).promise
      Promise.all([selfPromise, followsPromise, followedByPromise]).then(values => {
        // self
        self.data.self = {
          username: values[0].body.data.username,
          full_name: values[0].body.data.full_name
        }
        // follows
        var followsBody = values[1].body.data
        var followsIds = []
        var followsMappedById = {}
        followsBody.forEach(function (item) {
          var followsId = item.id
          followsIds.push(followsId)
          followsMappedById[followsId] = item
        })
        // followedBy
        var followedByBody = values[2].body.data
        var followedByIds = []
        var followedByMappedById = {}
        followedByBody.forEach(function (item) {
          var followsId = item.id
          followedByIds.push(followsId)
          followedByMappedById[followsId] = item
        })
        // 3 groups (euler circles: left, intersaction, right)
        followsIds.forEach(function (followsId) {
          if (followedByIds.includes(followsId)) {
            // case: intersaction
            self.data.peopleMutualLove.push(followsMappedById[followsId])
            // delete matched userId
            followedByIds.splice(followedByIds.indexOf(followsId), 1)
          } else {
            // case: left
            self.data.peopleYouLikeButTheyDontLikeYou.push(followsMappedById[followsId])
          }
        })
        followedByIds.forEach(function (followedById) {
          // case: right
          self.data.peopleWhoLikeYouButYouDontLikeThem.push(followedByMappedById[followedByIds])
        })
      }, reason => {
        // 404
      })
    }
  },
  created: function () {
    this.splitPeopleTo3Groups()
  }
}
</script>
