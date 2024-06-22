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

  // for DEBUG
  // page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.setCookie({
    name: "auth_token",
    value: process.env.auth_token,
    domain: ".x.com",
  });

  await page.goto(`https://x.com/${tweetName}`);
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  let data = null;
  let info = null;

  try {
    await page.waitForSelector('div[data-testid="cellInnerDiv"]');
  } catch (error) {
    console.error("Le compte n'existe pas");
    throw new Error("The account does not exist.");
  }

  try {
    data = await getData(page);
    if (!data) {
      console.log("Aucun tweet trouvé.");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
  }

  try {
    info = await getInfo(page);
    if (!info) {
      console.log("Aucune info trouvée.");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des infos : ", error);
  }

  if (!data && !info) {
    throw new Error("Pas de tweets récents et impossible de récupérer les infos.");
  }

  const result = { ...data, ...info };

  await browser.close();
  return result;
};

module.exports = puppet;
