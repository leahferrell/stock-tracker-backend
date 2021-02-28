// https://developer.tdameritrade.com/price-history/apis

const axios = require("axios");
const { authService } = require("../auth/auth");
const config = require("../../../config/config");

const priceHistoryService = {
  getPriceHistory: async ({
    symbol,
    periodType,
    period,
    frequencyType,
    frequency,
    endDate,
    startDate,
    needExtendedHoursData,
  }) => {
    return axios({
      method: "get",
      url: `${config.td.uri.marketdata}/${symbol}/pricehistory`,
      params: {
        periodType,
        period,
        frequency,
        frequencyType,
        endDate,
        startDate,
        needExtendedHoursData,
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
  priceHistoryService,
};
