const NodeCache = require("node-cache");
const config = require("../../../config/config");
const qs = require("qs");
const axios = require("axios");

const authCache = new NodeCache();

const redditAccessTokenKey = "reddit_access_token";

const oauth2Service = {
  postAccessToken: async () => {
    const basicAuthToken = Buffer.from(
      `${config.reddit.oauth2.clientId}:${config.reddit.oauth2.clientSecret}`
    ).toString("base64");

    return axios({
      method: "post",
      url: config.reddit.uri.oauth2,
      data: qs.stringify({
        grant_type: "password",
        username: config.reddit.oauth2.username,
        password: config.reddit.oauth2.password,
      }),
      headers: {
        Authorization: `Basic ${basicAuthToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  },
};

const redditAuthService = {
  getBearerToken: async () => {
    const potentialAccessToken = authCache.get(redditAccessTokenKey);

    if (potentialAccessToken) return `Bearer ${potentialAccessToken}`;

    const accessToken = await oauth2Service.postAccessToken();

    if (accessToken.access_token) {
      console.log(accessToken);

      authCache.set(
        redditAccessTokenKey,
        accessToken.access_token,
        accessToken.expires_in
      );

      return `Bearer ${accessToken.access_token}`;
    }

    throw new Error("Unauthorized");
  },
};

module.exports = {
  redditAuthService,
};
