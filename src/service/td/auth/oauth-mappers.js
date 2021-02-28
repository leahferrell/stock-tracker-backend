const config = require('../../../config/config')

const mapToRefreshTokenGrantRequest = (refreshToken) => {
	return {
		grant_type: 'refresh_token',
		refresh_token: refreshToken,
		client_id: `${config.td.oauth2.consumerKey}@AMER.OAUTHAP`
	}
}

const mapToAuthorizationCodeGrantRequest = (encodedAuthCode) => {
	return {
		access_type: 'offline',
		clientId: `${config.td.oauth2.consumerKey}@AMER.OAUTHAP`,
		code: decodeURIComponent(encodedAuthCode),
		grant_type: 'authorization_code',
		redirectUri: config.td.oauth2.redirectUri
	}
}

const mapToLoginUrl = () => {
	const encodedRedirectUri = encodeURIComponent(config.redirectUri)
	const encodedConsumerKey = encodeURIComponent(config.consumerKey)

	return `${config.td.uri.auth}?response_type=code&redirect_uri=${encodedRedirectUri}&client_id=${encodedConsumerKey}%40AMER.OAUTHAP`
}

module.exports = {
	mapToAuthorizationCodeGrantRequest,
	mapToLoginUrl,
	mapToRefreshTokenGrantRequest
}
