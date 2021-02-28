const NodeCache = require('node-cache')
const {oauthService} = require('./oauth')
const config = require('../../../config/config')

const authCache = new NodeCache()

const tdAccessTokenKey = 'td_access_token'

const authService = {
	getBearerToken: async () => {
		const potentialAccessToken = authCache.get(tdAccessTokenKey)

		if (potentialAccessToken)
			return `Bearer ${potentialAccessToken}`

		const accessToken = await oauthService.getAccessToken(config.td.oauth2.refreshToken)

		if (accessToken.access_token) {
			authCache.set(tdAccessTokenKey, accessToken.access_token, accessToken.expires_in)

			return `Bearer ${accessToken.access_token}`
		}

		throw new Error('Unauthorized')
	}
}

module.exports = {
	authService
}
