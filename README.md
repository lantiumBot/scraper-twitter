# Scraper Twitter <img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-2.png">

Ce module permet de récupérer les informations du dernier tweet posté par un utilisateur spécifique. Il fournit également des informations générales sur l'utilisateur, telles que le nombre de followers, le nombre d'abonnements, etc.

## Installation

Pour installer ce module, utilisez la commande suivante :

```bash
npm install scraper-twitter
```

## Dépendances pour les utilisateurs Debian

Si vous êtes sous Debian, vous devrez peut-être installer des paquets supplémentaires pour que Puppeteer fonctionne correctement. Exécutez la commande suivante pour installer les dépendances nécessaires :

```bash
sudo apt install libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0
```

[Source des dépendances](https://gist.github.com/tavinus/7effd4b3dac87cb4366e3767679a192f)

## Utilisation

Pour utiliser ce module, importez-le et appelez la fonction scraperTweet avec le nom d'utilisateur du compte comme argument (sans l'@):

```javascript
const scraperTweet = require('scraper-twitter');

scraperTweet('lan7ium').then(data => {
    console.log(data);
});
```

De plus dans votre projet pensez à mettre votre auth_token dans votre fichier .env

```
auth_token= L'auth token de votre compte Twitter.
```
### Récupérer le auth_token

Pour récupérer votre auth_token, rendez-vous sur [cette page](https://twitter.com/), vous devez vous connecter sauf si c'est déjà fait et vous faites CTRL + F12, maintenant Storage (Firefox) / Application (Chrome et Edge), rendez-vous dans Cookies > https://twitter.com > auth_token et vous pouvez maintenant copier votre auth_token et le coller dans votre fichier .env.

## Retour

La fonction `scraperTweet` renvoie un objet contenant les informations suivantes :

- **tweetText** : Texte du dernier tweet. (Peut être vide)
- **tweetLink** : URL du dernier tweet.
- **tweetTime** : Date de publication du dernier tweet.
- **gifURL** : Tableau contenant les URL du/des GIF du dernier tweet. (Peut être vide)
- **imgURLs** : Tableau contenant les URL des images du dernier tweet. (Peut être vide)
- **username** : Nom d'affichage de l'utilisateur. (=/= @username)
- **bio** : Biographie de l'utilisateur. (Peut être vide)
- **following** : Nombre d'utilisateurs suivis par l'utilisateur.
- **followers** : Nombre de followers de l'utilisateur.
- **profileImageUrl** : URL de l'image de profil de l'utilisateur.

## Exemple de sortie

Voici un exemple de sortie de la fonction `scraperTweet` :

```json
{
    "tweetText": "Je suis un tweet !",
    "tweetLink": "https://twitter.com/lan7ium/status/1234567890123456789",
    "tweetTime": "2020-03-01T00:00:00.000Z",
    "gifURL": [],
    "imgURLs": [
        "https://pbs.twimg.com/media/ERG0Q0VXkAAZ0ZS.jpg"
    ],
    "username": "lan7ium",
    "bio": "Je suis une bio !",
    "following": 42,
    "followers": 1337,
    "profileImageUrl": "https://pbs.twimg.com/profile_images/1234567890123456789/abcdefghijklmnopqrstuvwxyz1234567890"
}
```

## Licence

Ce projet est sous licence WTFPL - consultez [WTFPL website](http://www.wtfpl.net/) pour plus de détails.