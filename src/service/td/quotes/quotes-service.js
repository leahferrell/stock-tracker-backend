// https://developer.tdameritrade.com/quotes/apis

const axios = require("axios");
const { authService } = require("../auth/auth");
const config = require("../../../config/config");

const quotesService = {
  getQuote: async (symbol) => {
    return axios({
      method: "get",
      url: `${config.td.uri.marketdata}/${symbol}/quotes`,
      headers: {
        Authorization: await authService.getBearerToken(),
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);

        return {};
      });
  },
  getQuotes: async (symbols) => {
    return axios({
      method: "get",
      url: `${config.td.uri.marketdata}/quotes`,
      params: {
        symbol: symbols.join(","),
      },
      headers: {
        Authorization: await authService.getBearerToken(),
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);

        return {};
      });
  },
};

module.exports = {
  quotesService,
};
