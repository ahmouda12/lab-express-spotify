const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const morgan = require('morgan');
const body = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Remember to paste here your credentials
const clientId = '0a539c2de803472eb356977ee9e2d8d9',
    clientSecret = 'ddb9f84be4534e3896ce0f369b78adc2';

const spotifyApi = new SpotifyWebApi({
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

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/artists', (req, res) => {
  res.render('artist');
});

app.listen(3000);