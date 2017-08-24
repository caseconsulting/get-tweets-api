var express = require('express');
var app = express();
var cors = require('cors');
var twitter = require('./twitterapi');
var twittermiddleware = require('./twittermiddleware');

//To prevent cross-origin issues...yeah next level... oh yeah
//enables cors for all routes
app.use(cors());

//route for tweets called by tweets function
app.get('/tweets/:handle', twittermiddleware.tweets);

//route for friends
app.get('/friends/:handle', twittermiddleware.friends);

//route for followers
app.get('/followers/:handle', twittermiddleware.followers);

app.get('/favorites/:handle', twittermiddleware.favorites);

//app.get('/status', twitter.status);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`CORS-enabled, listening on ${PORT}`);
});
