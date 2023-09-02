// index.js

const fs = require("fs");
const puppet = require("./modules/puppeteer");

async function checkTweet(username) {
  let firstNormalTweet = null;
  let attempts = 0;
  const maxAttempts = 2;

  while (firstNormalTweet === null && attempts < maxAttempts) {
    try {
      firstNormalTweet = await puppet(username);
    } catch (error) {
      attempts++;

      console.error(`Une erreur s'est produite, nouvelle tentative... (Essai ${attempts}/${maxAttempts})`);
    }
  }

  if (firstNormalTweet === null) {
    throw new Error("Impossible de récupérer le tweet.");
  }

  return firstNormalTweet;
}

module.exports = checkTweet;
