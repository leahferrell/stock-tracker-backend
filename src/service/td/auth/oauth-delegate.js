const qs = require("qs");
const axios = require("axios");
const config = require("../../../config/config");

const authServiceDelegate = {
  postOauth2Token: async (bodyParams) => {
    return axios({
      method: "post",
      url: config.td.uri.oauth2,
      data: qs.stringify(bodyParams),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },
};

module.exports = {
  authServiceDelegate,
};
