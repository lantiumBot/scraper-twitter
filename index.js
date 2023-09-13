// index.js

const fs = require("fs");
const puppet = require("./modules/puppeteer");

async function checkTweet(username) {
  let firstNormalTweet = null;
  let attempts = 0;
  const maxAttempts = 2;

  while (firstNormalTweet === null && attempts < maxAttempts) {
    try {
      console.log('avant');
      firstNormalTweet = await puppet(username);
      console.log("Après")
    } catch (error) {
      if (error === "The account does not exist.") {
        throw new Error("The account does not exist.");
      } else if (error === "There are no recent tweets.") {
        throw new Error("There are no recent tweets.");
      } else {

      attempts++;

      console.error(`An error has occurred, try again... (${attempts}/${maxAttempts})`);
      }
    }
  }

  if (firstNormalTweet === null) {
    throw new Error("Unable to retrieve the tweet.");
  }

  return firstNormalTweet;
}

module.exports = checkTweet;
