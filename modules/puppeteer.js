// /modules/puppeteer.js

const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const stealth = StealthPlugin();
stealth.enabledEvasions.delete("user-agent-override");
puppeteer.use(stealth);
const dotenv = require("dotenv");
dotenv.config();

const getData = require("./getData");
const getInfo = require("./getInfo");

const puppet = async (tweetName) => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

    await page.setCookie({
      name: "auth_token",
      value: process.env.auth_token,
      domain: "twitter.com",
    });

    await page.goto(`https://twitter.com/${tweetName}`);
    await page.setViewport({
      width: 1920,
      height: 1080,
    });

    try {
    await page.waitForSelector('div[data-testid="cellInnerDiv"]');
    } catch (error) {
      throw new Error("Le compte n'existe pas.");
    }

    const data = await getData(page);
    const info = await getInfo(page);

    if (!data || !info) {
      throw new Error("Il n'y a pas de tweet récent.");
    }

    const result = {
      ...data,
      ...info,
    };

    await browser.close();
    return result;
};

module.exports = puppet;
