// /modules/getInfo.js

async function getInfo(page) {
  const info = await page.evaluate(() => {
    let profileImageElement = document.querySelector('a[href$="/photo"] img');
    let profileImageUrl = profileImageElement ? profileImageElement.src : null;

    if (profileImageUrl) {
      const [baseUrl, filename] = profileImageUrl.split("/").slice(-2);

      const [mainName, ...rest] = filename.split("_");

      profileImageUrl = `${baseUrl}/${mainName}.jpg`;
    } else {
      profileImageUrl = null;
    }

    let username = document.querySelector(
      'div[data-testid="UserName"]'
    ).innerText;
    username = username.split("\n")[0];

    const bioElement = document.querySelector(
      'div[data-testid="UserDescription"]'
    );
    let bio = bioElement ? bioElement.innerText : "";
    bio = bio.replace(/\n/g, " ");
    bio = bio === "" ? null : bio;

    const followingElement = document.querySelector('a[href$="/following"]');
    const followersElement = document.querySelector('a[href$="/followers"]');

    const following = followingElement
      ? followingElement.innerText.split(" ")[0]
      : null;
    const followers = followersElement
      ? followersElement.innerText.split(" ")[0]
      : null;

    info = {
      username,
      bio,
      following,
      followers,
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/" + profileImageUrl,
    };
    return info;
  });
  return info;
}

module.exports = getInfo;
