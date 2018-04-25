<script>
export default {
  name: 'instagram-repository',
  methods: {
    getUserFollowsData: function () {
      return {
        body: {
          data: [
            {
              id: 1,
              username: 'untinenear',
              full_name: 'Fildo Meisen',
              profile_picture: 'https://ondeaf.s3.amazonaws.com/upload/photos/2018/03/6Lxi4FbID52kwNflQzfn_25_bf44de5dcae7c8cefb1333836475361b_avatar.jpg'
            },
            {
              id: 2,
              username: 'intasofore',
              full_name: 'Kunio Selena',
              profile_picture: 'https://i.pinimg.com/736x/0e/a5/2a/0ea52a6e76028e9709ed32c23c4d22a7--sad-girl-facebook-profile.jpg'
            },
            {
              id: 3,
              username: 'lengatente',
              full_name: 'Gero Ines',
              profile_picture: 'https://www.onlineprofilepros.com/wp-content/uploads/2013/06/Example-3-copy-150x150.jpg'
            },
            {
              id: 4,
              username: 'erentoraro',
              full_name: 'Hugo Monojo',
              profile_picture: 'https://hollywoodneuz.net/wp-content/uploads/2013/09/Sigrid-Agren-6-150x150.jpg'
            },
            {
              id: 5,
              username: 'eristofedi',
              full_name: 'Polo Kiden',
              profile_picture: 'https://druzi.uk/upload/photos/2017/05/MVKKJgoivKpwpqGF2bk6_21_bb2b6ca6713a56b26c6bdf316ae69bd9_avatar.jpg'
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
              username: 'intasofore',
              full_name: 'Kunio Selena',
              profile_picture: 'https://i.pinimg.com/736x/0e/a5/2a/0ea52a6e76028e9709ed32c23c4d22a7--sad-girl-facebook-profile.jpg'
            },
            {
              id: 3,
              username: 'lengatente',
              full_name: 'Gero Ines',
              profile_picture: 'https://www.onlineprofilepros.com/wp-content/uploads/2013/06/Example-3-copy-150x150.jpg'
            },
            {
              id: 6,
              username: 'entindoush',
              full_name: 'Lolela Fataga',
              profile_picture: 'https://bestlovesms.in/wp-content/uploads/2016/10/diwali-whatsapp-profile-pics-in-full-hd--150x150.jpg'
            }
          ]
        }
      }
    }
  }
}
</script>
