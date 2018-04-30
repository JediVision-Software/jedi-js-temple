<script>
export default {
  name: 'instagram-repository',
  methods: {
    getUserSelf: function () {
      return {
        body: {
          data: {
            id: 100,
            username: 'ostap_petrushka',
            full_name: 'Ostap Petrushka',
            profile_picture: 'http://bookonedollar.ru/wp-content/uploads/2017/07/ostap-bender1-150x150.png',
            bio: 'Can you give a key to the apartment where the money is?',
            website: 'ostap.petrushka.io',
            is_business: false,
            counts: {
              media: 58,
              follows: this.getUserFollowsData().body.data.length,
              followed_by: this.getUserFollowsByData().body.data.length
            }
          }
        }
      }
    },
    getUserFollowsData: function () {
      return {
        body: {
          data: [
            {
              id: 1,
              username: 'schwarzenegger',
              full_name: 'Arnold Schwarzenegger',
              profile_picture: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Arnold-Schwarzenegger-Background-Full-HD-for-Iphone-150x150.jpg'
            },
            {
              id: 2,
              username: 'millajovovich',
              full_name: 'Milla Jovovich',
              profile_picture: 'https://expertnews.info/wp-content/uploads/2017/12/3381dc2878c64cbe8d01f170a41791ac.jpg'
            },
            {
              id: 3,
              username: 'jimkerry',
              full_name: 'Jim Kerry',
              profile_picture: 'http://www.homeenglish.ru/image/jim_carrey.jpg'
            },
            {
              id: 4,
              username: 'robertdeniro',
              full_name: 'Robert Deniro',
              profile_picture: 'https://cdn1.ijr.com/wp-content/uploads/2015/04/Capture1-150x150.jpg'
            },
            {
              id: 5,
              username: 'rachelmcadams',
              full_name: 'Rachel McAdams',
              profile_picture: 'https://scontent-sea1-1.cdninstagram.com/vp/ddc51fb109aa35c143eec0d27d2602c4/5B3F3BA6/t51.2885-19/s150x150/14727591_1305820456097781_1091010083610951680_a.jpg'
            }
          ]
        }
      }
    },
    getUserFollowsByData: function () {
      return {
        body: {
          data: [
            {
              id: 2,
              username: 'millajovovich',
              full_name: 'Milla Jovovich',
              profile_picture: 'https://expertnews.info/wp-content/uploads/2017/12/3381dc2878c64cbe8d01f170a41791ac.jpg'
            },
            {
              id: 3,
              username: 'jimkerry',
              full_name: 'Jim Kerry',
              profile_picture: 'http://www.homeenglish.ru/image/jim_carrey.jpg'
            },
            {
              id: 6,
              username: 'annehathaway',
              full_name: 'Anne Hathaway',
              profile_picture: 'http://cdn.brooklynheightsblog.com/wp-content/uploads/Anne-Hathaway-anne-hathaway-753353_1024_768-150x150.jpg'
            },
            {
              id: 7,
              username: 'zacefron',
              full_name: 'Zac Efron',
              profile_picture: 'https://proxy10.online.ua/parni/r3-f397f66f32/small_4f06e69273d02.jpg'
            },
            {
              id: 8,
              username: 'milakunis',
              full_name: 'Mila Kunis',
              profile_picture: 'https://static.gofugyourself.com/uploads/2011/01/Mila-Kunis-Sags-108624385-150x150.jpg'
            },
            {
              id: 9,
              username: 'robertdowneyjr',
              full_name: 'Robert Downey Jr.',
              profile_picture: 'https://starschanges.com/wp-content/uploads/2016/06/robert-downey-jr-family-9-3-150x150.jpg'
            },
            {
              id: 10,
              username: 'scarlettjohansson',
              full_name: 'Scarlett Ingrid Johansson',
              profile_picture: 'http://sweethaircuts.com/wp-content/uploads/2016/08/scarlett-johansson-bob-haircut-correspond-to-for-who-wants-to-look-beautiful-150x150.jpg'
            }
          ]
        }
      }
    }
  }
}
</script>
