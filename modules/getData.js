// /modules/getData.js

async function getData(page) {
  const firstNormalTweet = await page.evaluate(() => {
    const allTweets = document.querySelectorAll(
      'div[data-testid="cellInnerDiv"]'
    );
    let firstNormalTweet = "";

    try {

    for (let i = 0; i < Math.min(10, allTweets.length); i++) {
      const tweetNode = allTweets[i];

      const socialContextElement = tweetNode.querySelector(
        '[data-testid="socialContext"]'
      );
      const socialContextText = socialContextElement
        ? socialContextElement.innerText
        : "";

      const sponsoredElement = tweetNode.querySelector(
        '[data-testid="card.wrapper"]'  
      );
      const sponsoredText = sponsoredElement
        ? sponsoredElement.innerText
        : "";

      
      if (socialContextText) {
        continue;
      } else if (sponsoredText) {
        continue;
      }

      const tweetText = tweetNode.querySelector(
        '[data-testid="tweetText"]'
      ).innerText;
      const tweetLinkElement = tweetNode.querySelector('a[href*="/status/"]');
      const tweetLink = tweetLinkElement
        ? tweetLinkElement.getAttribute("href")
        : "";

      const tweetTimeElement = tweetNode.querySelector("time");
      const tweetTime = tweetTimeElement
        ? tweetTimeElement.getAttribute("datetime")
        : "";

      const gifElement = tweetNode.querySelector(
        'video[src*="https://video.twimg.com/tweet_video/"]'
      );
      const gifURL = gifElement ? gifElement.getAttribute("src") : [];

      const imgElements = tweetNode.querySelectorAll(
        'img[src*="https://pbs.twimg.com/media/"]'
      );
      const imgURLs =
        imgElements.length > 0
          ? [...imgElements].map((img) => img.getAttribute("src"))
          : [];

      firstNormalTweet = {
        tweetText,
        tweetLink: "https://twitter.com" + tweetLink,
        tweetTime,
        gifURL,
        imgURLs: imgURLs.map((imgURL) => {
          let url = new URL(imgURL);
          var search_params = url.searchParams;
          search_params.set("format", "png");
          search_params.delete("name");
          url.search = search_params.toString();
          return url.toString();
        }),
      };

      break;
    }
  } catch (error) {
      throw new Error("There are no recent tweets.");
  }

    return firstNormalTweet;
  });

  return firstNormalTweet;
}

module.exports = getData;
