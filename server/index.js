const express = require('express')
const request = require('request');
const dotenv = require('dotenv');

const port = 5000

// global.access_token = ''

dotenv.config()



var spotify_redirect_uri = 'http://localhost:5000/auth/callback'

// To generate state for GET - a random string that is optional but recommended.
var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var app = express();

app.get('/auth/login', (req, res) => {
  var scope = "streaming user-read-email user-read-private"
  var state = generateRandomString(16);

  var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
  var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

  console.log("login request")
  console.log(spotify_client_id, spotify_client_secret)

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state
  })
  console.log("login request, redirecting");
  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
})

app.get('/auth/callback', (req, res) => {

  console.log("callback request");

  var code = req.query.code;

  var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
  var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };

  console.log("about to request")
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body.access_token);
      access_token = body.access_token;
      res.redirect('http://localhost:3000/')
    }
    else{
      console.log(error)
    }
  });



})

app.get('/auth/token', (req, res) => {
  console.log("token request");
  res.json({ access_token: access_token})
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})