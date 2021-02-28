// https://developer.tdameritrade.com/option-chains/apis/get/marketdata/chains

const axios = require('axios')
const {authService} = require('../auth/auth')
const config = require('../../../config/config')

const optionsService = {
	getOptionChain: async ({
		symbol,
		contractType,
		strikeCount,
		includeQuotes,
		strategy,
		interval,
		strike,
		range,
		fromDate,
		toDate,
		volatility,
		underlyingPrice,
		interestRate,
		daysToExpiration,
		expMonth,
		optionType
	}) => {
		return axios({
			method: 'get',
			url: `${config.td.uri.marketdata}/chains`,
			params: {
				symbol,
				contractType,
				strikeCount,
				includeQuotes,
				strategy,
				interval,
				strike,
				range,
				fromDate,
				toDate,
				volatility,
				underlyingPrice,
				interestRate,
				daysToExpiration,
				expMonth,
				optionType
			},
			headers: {
				'Authorization': await authService.getBearerToken()
			}
		})
			.then((response) => {
				return response.data
			})
			.catch((error) => {
				console.log(error)

				return {}
			})
	}
}

module.exports = {
	optionsService
}
