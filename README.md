# Scraper Twitter <img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-2.png">

This module allows you to retrieve information from the latest tweet posted by a specific user. It also provides general information about the user, such as the number of followers, the number of subscriptions, etc.

## Installation

To install this module, use the following command:

```bash
npm install scraper-twitter
```

## Dependencies for Debian Users

If you are on Debian, you may need to install additional packages for Puppeteer to work correctly. Run the following command to install the required dependencies:

```bash
sudo apt install libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0
```

[Source of Dependencies](https://gist.github.com/tavinus/7effd4b3dac87cb4366e3767679a192f)

## Usage

To use this module, import it and call the scraperTweet function with the username of the account as an argument (without the @):

```javascript
const scraperTweet = require('scraper-twitter');

scraperTweet('lan7ium').then(data => {
    console.log(data);
});
```

Additionally, in your project, remember to put your auth_token in your .env file.

```
auth_token= L'auth token de votre compte Twitter.
```
### Retrieve the auth_token

To get your auth_token, go to this page, you must log in unless you are already logged in. Press CTRL + F12, then go to Storage (Firefox) / Application (Chrome and Edge), go to Cookies > https://x.com > auth_token, and you can now copy your auth_token and paste it into your .env file.

## Return

The `scraperTweet` function returns an object containing the following information:


- **tweetText** : Text of the latest tweet. (May be empty)
- **tweetLink** : URL of the latest tweet.
- **tweetTime** : Publication date of the latest tweet.
- **gifURL** : Array containing the URL(s) of the GIF(s) in the latest tweet. (May be empty)
- **imgURLs** : Array containing the URLs of the images in the latest tweet. (May be empty)
- **username** : Display name of the user. (=/= @username)
- **bio** : User's biography. (May be empty)
- **following** : Number of users followed by the user.
- **followers** : Number of the user's followers.
- **profileImageUrl** : URL of the user's profile picture.

## Example Output

Here is an example output of the `scraperTweet` function:

```json
{
    "tweetText": "I am a tweet!",
    "tweetLink": "https://x.com/lan7ium/status/1234567890123456789",
    "tweetTime": "2020-03-01T00:00:00.000Z",
    "gifURL": [],
    "imgURLs": [
        "https://pbs.twimg.com/media/ERG0Q0VXkAAZ0ZS.jpg"
    ],
    "username": "lan7ium",
    "bio": "I am a bio!",
    "following": 42,
    "followers": 1337,
    "profileImageUrl": "https://pbs.twimg.com/profile_images/1234567890123456789/abcdefghijklmnopqrstuvwxyz1234567890"
}
```

## Licence

This project is under WTFPL license - see [WTFPL website](http://www.wtfpl.net/) for more details.