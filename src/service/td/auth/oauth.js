const {authServiceDelegate} = require('./oauth-delegate')
const {mapToRefreshTokenGrantRequest, mapToAuthorizationCodeGrantRequest, mapToLoginUrl} = require('./oauth-mappers')

const handleErrors = () => {
	return {
		loginUrl: mapToLoginUrl()
	}
}

const oauthService = {
	getRefreshToken: async (encodedAuthCode) => {
		return authServiceDelegate.postOauth2Token(mapToAuthorizationCodeGrantRequest(encodedAuthCode))
			.then((response) => {
				return response.data
			})
			.catch(() => {
				return handleErrors()
			})
	},
	getAccessToken: async (refreshToken) => {
		return authServiceDelegate.postOauth2Token(mapToRefreshTokenGrantRequest(refreshToken))
			.then((response) => {
				return response.data
			})
			.catch(() => {
				return handleErrors()
			})
	}
}

module.exports = {
	oauthService
}
