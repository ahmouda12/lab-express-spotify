var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = '0a539c2de803472eb356977ee9e2d8d9',
    clientSecret = 'ddb9f84be4534e3896ce0f369b78adc2';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});