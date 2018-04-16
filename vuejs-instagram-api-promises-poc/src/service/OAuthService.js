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
var responseType = 'token'
this.endpoints = {
  oauthURL: 'https://api.instagram.com/oauth/authorize' +
  '?client_id=' + clientId +
  '&redirect_uri=' + redirectUri +
  '&scope=' + scope +
  '&response_type=' + responseType
}
this.getOAuthURL = function () {
  return this.endpoints.oauthURL
}
