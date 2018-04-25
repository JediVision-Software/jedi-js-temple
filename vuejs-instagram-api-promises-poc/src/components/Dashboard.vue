<template src="../templates/dashboard.html"></template>
<style scoped src="../css/dashboard.css"></style>
<script>
import Vue from 'vue'
import router from '../router'
import InstagramService from './InstagramService'
export default {
  name: 'dashboard',
  components: {
    InstagramService
  },
  data () {
    return {
      data: {
        self: {},
        // 3 groups (euler circles: left, intersaction, right)
        peopleYouLikeButTheyDontLikeYou: [],
        peopleMutualLove: [],
        peopleWhoLikeYouButYouDontLikeThem: []
      },
      followsIds: [],
      followedByIds: [],
      followsMappedById: {},
      followedByMappedById: {}
    }
  },
  methods: {
    splitPeopleTo3Groups: function () {
      var self = this
      var accessToken = Vue.ls.get('accessToken')
      if (accessToken == null) {
        router.push({name: 'home'})
      }

      InstagramService.methods.getUserInfo().then(promise => {
        // self
        self.data.self = {
          id: promise.body.data.id,
          username: promise.body.data.username,
          full_name: promise.body.data.full_name,
          profile_picture: promise.body.data.profile_picture,
          bio: promise.body.data.bio,
          website: promise.body.data.website,
          is_business: promise.body.data.is_business,
          counts: {
            media: promise.body.data.counts.media,
            follows: promise.body.data.counts.follows,
            followed_by: promise.body.data.counts.followed_by
          }
        }
      }, reason => {
        router.push({name: 'unexpected'})
      })

      InstagramService.methods.getUserFollows().then(promise => {
        // follows
        var followsBody = promise.body.data
        self.followsIds = []
        self.followsMappedById = {}
        followsBody.forEach(function (item) {
          var followsId = item.id
          self.followsIds.push(followsId)
          self.followsMappedById[followsId] = item
        })
        self.updateFollowsAndFollowedBy(self)
      }, reason => {
        router.push({name: 'unexpected'})
      })

      InstagramService.methods.getUserFollowsBy().then(promise => {
        // followedBy
        var followedByBody = promise.body.data
        self.followedByIds = []
        self.followedByMappedById = {}
        followedByBody.forEach(function (item) {
          var followsId = item.id
          self.followedByIds.push(followsId)
          self.followedByMappedById[followsId] = item
        })
        self.updateFollowsAndFollowedBy(self)
      }, reason => {
        router.push({name: 'unexpected'})
      })
    },
    // 3 groups (euler circles: left, intersaction, right)
    updateFollowsAndFollowedBy: function (self) {
      self.data.peopleMutualLove = []
      self.data.peopleYouLikeButTheyDontLikeYou = []
      self.data.peopleWhoLikeYouButYouDontLikeThem = []
      // case: intersaction
      self.followsIds.forEach(function (followsId) {
        if (self.followedByIds.includes(followsId)) {
          self.data.peopleMutualLove.push(self.followsMappedById[followsId])
        }
      })
      // case: left
      self.followsIds.forEach(function (followsId) {
        self.data.peopleYouLikeButTheyDontLikeYou.push(self.followsMappedById[followsId])
      })
      // case: right
      self.followedByIds.forEach(function (followedById) {
        self.data.peopleWhoLikeYouButYouDontLikeThem.push(self.followedByMappedById[followedById])
      })
    }
  },
  created: function () {
    this.splitPeopleTo3Groups()
  }
}
</script>
