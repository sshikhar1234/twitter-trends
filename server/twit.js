const twit = require("twit");
const dotenv = require("dotenv");
dotenv.config();

var client = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  // consumer_key: env.TWITTER_CONSUMER_KEY,
  // consumer_secret: env.TWITTER_CONSUMER_SECRET,
  // access_token: env.TWITTER_ACCESS_TOKEN_KEY,
  // access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET,
});

module.exports = client;
